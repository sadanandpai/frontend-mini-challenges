import { MailAPI } from "./MailAPI.js";
import { MailContent } from "./MailContent.js";
import { getElementFromHtml } from "./utils.js";

export class MailList {
  constructor(root, routeTag) {
    this.routeTag = routeTag;
    this.root = root;

    document.querySelector(".mail-list")?.remove();
    document.querySelector(".mail-content")?.remove();

    const sectionHtml = `<section class="mail-list"></section>`;
    this.mailListSection = getElementFromHtml(sectionHtml);
    this.root.appendChild(this.mailListSection);

    const contentSectionHtml = `<section class="mail-content"></section>`;
    this.mailContentSection = getElementFromHtml(contentSectionHtml);
    this.root.appendChild(this.mailContentSection);
    this.mailContentSection = document.querySelector(".mail-content");
    this.mailContentSection.innerHTML = "";

    this.activeMailItem = null;
    this.renderMailList();
    this.handleMailListItemClick();
  }

  renderMailList() {
    const mails = MailAPI.getAllMails(this.routeTag);
    let mailListHtml = ``;
    mails.forEach((mail) => {
      const isImportant = mail.tags.find((tag) => tag.name === "important");
      const mailListItemHtml = `
      <article class="mail-list__item ${
        mail.isRead ? "mail-list__item--read" : ""
      }" data-item-id="${mail.id}">        
        <span class="mail-list__item--header">${mail.title}</span>
        <span class="mail-list__item--content">${mail.content}</span>        
        <div class="mail-list__item--actions">
          <button data-action="read">${mail.isRead ? "Unread" : "Read"}</button>
          <button data-action="important">${
            isImportant ? "Mark as not important" : "Mark as important"
          }</button>
         </div>
      </article>`;

      mailListHtml += mailListItemHtml;
    });

    this.mailListSection.innerHTML = mailListHtml;
  }

  handleItemClickActions = (e) => {
    const closestSelectedMailItem = e.target.closest("article");
    const currentMailId = closestSelectedMailItem?.dataset?.itemId;
    if (e.target.dataset.action === "read") {
      this.handleMarkAsReadOrUnread({
        element: closestSelectedMailItem,
        mailId: currentMailId,
      });
      return;
    } else if (e.target.dataset.action === "important") {
      this.handleMarkAsImportant({
        element: closestSelectedMailItem,
        mailId: currentMailId,
      });
      return;
    }
    //  else {
    //   this.handleMarkAsReadOrUnread({
    //     element: closestSelectedMailItem,
    //     mailId: currentMailId,
    //     isMailSelected: true,
    //   });
    // }
    this.activeMailItem?.classList.remove("mail-list--active");
    this.activeMailItem = closestSelectedMailItem;
    closestSelectedMailItem.classList.add("mail-list--active");
    const mailContentInstance = new MailContent({ currentMailId });
    this.mailContentSection.innerHTML = mailContentInstance.renderMailContent();
  };

  handleMailListItemClick() {
    this.mailListSection.addEventListener("click", this.handleItemClickActions);
  }

  handleMarkAsReadOrUnread({ element, mailId, isMailSelected }) {
    const currentMail = MailAPI.getMailById(mailId);
    // If mail is selected & already read, then don't mark it as unread on mail item click
    // if (isMailSelected && currentMail.isRead) return;
    const isRead = !currentMail.isRead;
    MailAPI.updateMail({ ...currentMail, isRead });
    element.querySelector("button[data-action='read']").textContent = isRead
      ? "Unread"
      : "Read";
    element.classList.toggle("mail-list__item--read");
  }

  handleMarkAsImportant({ element, mailId }) {
    const currentMail = MailAPI.getMailById(mailId);
    let updatedTags = [];
    const isImportant = currentMail.tags.some(
      (tag) => tag.name === "important"
    );
    if (isImportant) {
      updatedTags = currentMail.tags.filter((tag) => tag.name !== "important");
    } else {
      updatedTags = currentMail.tags.concat([{ name: "important" }]);
    }
    MailAPI.updateMail({ ...currentMail, tags: updatedTags });
    element.querySelector("button[data-action='important']").textContent =
      !isImportant ? "Mark as not important" : "Mark as important";
  }
}
