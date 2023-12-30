export class MailAPI {
  constructor() {}

  static getAllMails(routeTag) {
    const allMails = readData();
    const filteredMails = allMails.filter((mail) => {
      return mail.tags?.some((tag) => tag.name === routeTag);
    });
    return filteredMails;
  }

  static getMailById(mailId) {
    const allMails = readData();
    const mail = allMails.find((mail) => mail.id === mailId);
    return mail;
  }

  static addNewMail(emailPayload) {
    const allMails = readData();
    allMails.push({ id: crypto.randomUUID(), ...emailPayload });
    saveData(allMails);
    return emailPayload;
  }

  static updateMail(updatedEmailPayload) {
    const allMails = readData();
    const updatedAllMails = allMails.map((mail) => {
      if (mail.id === updatedEmailPayload.id) {
        return { ...mail, ...updatedEmailPayload };
      }
      return mail;
    });
    saveData(updatedAllMails);
    return updatedAllMails;
  }

  static deleteMail(mailId) {
    const allMails = readData();
    const updatedAllMails = allMails.filter((mail) => mail.id !== mailId);
    saveData(updatedAllMails);
    return updatedAllMails;
  }
}

const mockMailData = [
  {
    id: crypto.randomUUID(),    
    title: "Mail#1",
    tags: [{ name: "inbox" }, { name: "important" }],
    content:
      "dsahjfgshfgshfvsgfdsvygfsvdfghvghvdsahjfgshfgshf vsgfdsvygfsvdfghvghvdsahjfgshfgshfvsgfdsvygfsvdfghvghv",
  },
  {
    id: crypto.randomUUID(),
    title: "Mail#2",
    tags: [{ name: "inbox" }],
    content:
      "dsahjfgshfgshfvsgfdsvygfsvdfghvghvdsahjfgshfgshf vsgfdsvygfsvdfghvghvdsahjfgshfgshfvsgfdsvygfsvdfghvghv",
  },
  {
    id: crypto.randomUUID(),
    title: "Mail#3",
    tags: [{ name: "inbox" }, { name: "sent" }],
    content:
      "dsahjfgshfgshfvsgfdsvygfsvdfghvghvdsahjfgshfgshfv sgfdsvygfsvdfghvghvdsahjfgshfgshfvsgfdsvygfsvdfghvghv",
  },
];

const readData = () => {
  const tasks = localStorage.getItem("email-storage");

  if (!tasks) {
    return mockMailData;
  }

  return JSON.parse(tasks);
};

const saveData = (data) => {
  if (data.length > 0) {
    localStorage.setItem("email-storage", JSON.stringify(data));
  }
};

/**
 * [
 *  {
 *    id:1,
 *    content:'',
 *    tags:[{name:'sent', updated_at:''}],
 *    markAsRead: true / false,
 *    created_at:'',
 *
 *  }
 * ]
 */
