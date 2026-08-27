import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

interface WordCountModel {
  text: string;
  wordCount: number;
  charCount: number;
  paraCount: number;
}

@Component({
  selector: 'app-word-count',
  imports: [FormsModule],
  templateUrl: './word-count.component.html',
  styleUrl: './word-count.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordCountComponent {
  text = '';
  wordCount = 0;
  charCount = 0;
  paraCount = 0;

  countWords() {
    const words = this.text.split(/\s+/).filter((word) => word !== '');
    const characters = this.text.length;
    const paragraphs = this.text.split('\n').filter((para) => para.trim() !== '').length;

    this.wordCount = words.length;
    this.charCount = characters;
    this.paraCount = paragraphs;

    saveData({
      text: this.text,
      wordCount: this.wordCount,
      charCount: this.wordCount,
      paraCount: this.paraCount,
    });
  }

  clearText() {
    this.text = '';
    this.wordCount = 0;
    this.charCount = 0;
    this.paraCount = 0;
  }

  loadData() {
    this.text = localStorage.getItem('text') || '';
    this.wordCount = Number(localStorage.getItem('words') || 0);
    this.charCount = Number(localStorage.getItem('chars') || 0);
    this.paraCount = Number(localStorage.getItem('paras') || 0);
  }
}

function saveData({ text, wordCount, charCount, paraCount }: WordCountModel) {
  localStorage.setItem('text', text);
  localStorage.setItem('words', String(wordCount));
  localStorage.setItem('chars', String(charCount));
  localStorage.setItem('paras', String(paraCount));
}
