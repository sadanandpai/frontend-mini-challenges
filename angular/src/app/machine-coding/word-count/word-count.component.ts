import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface WordCountModel {
  text: string;
  wordCount: number;
  charCount: number;
  paraCount: number;
}

@Component({
  selector: 'app-word-count',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
  ],
  templateUrl: './word-count.component.html',
  styleUrls: ['./word-count.component.scss']
})
export class WordCountComponent implements OnInit {

  text = '';
  wordCount = 0;
  charCount = 0;
  paraCount = 0;

  saveData({ text, wordCount, charCount, paraCount }: WordCountModel) {
    localStorage.setItem('text', text);
    localStorage.setItem('words', wordCount + '');
    localStorage.setItem('chars', charCount + '');
    localStorage.setItem('paras', paraCount + '');
  };

  countWords() {
    const words = this.text.split(/\s+/).filter((word) => word !== '');
    const characters = this.text.length;
    const paragraphs = this.text.split('\n').filter((para) => para.trim() !== '').length;

    this.wordCount = words.length;
    this.charCount = characters;
    this.paraCount = paragraphs;

    // Update data
    this.saveData({
      text: this.text,
      wordCount: this.wordCount,
      charCount: this.wordCount,
      paraCount: this.paraCount,
    });
  };

  clearText() {
    this.text = '';
    this.wordCount = 0;
    this.charCount = 0;
    this.paraCount = 0;
  };

  loadData() {
    this.text = localStorage.getItem('text') || '';
    this.wordCount = +(localStorage.getItem('words') || 0);
    this.charCount = +(localStorage.getItem('chars') || 0);
    this.paraCount = +(localStorage.getItem('paras') || 0);
  };

  ngOnInit(): void {

  }
}
