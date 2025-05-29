/**
 * Supported language codes for translation
 */
export type Language =
  | 'en' // English
  | 'hi' // Hindi
  | 'es' // Spanish
  | 'fr' // French
  | 'de' // German
  | 'it' // Italian
  | 'pt' // Portuguese
  | 'ru' // Russian
  | 'ja' // Japanese
  | 'ko' // Korean
  | 'zh' // Chinese
  | 'ar' // Arabic
  | 'tr' // Turkish
  | 'nl' // Dutch
  | 'pl' // Polish
  | 'vi' // Vietnamese
  | 'th' // Thai
  | 'id' // Indonesian
  | 'ms' // Malay
  | 'fa' // Persian
  | 'he' // Hebrew
  | 'el' // Greek
  | 'cs' // Czech
  | 'hu' // Hungarian
  | 'ro' // Romanian
  | 'sv' // Swedish
  | 'da' // Danish
  | 'fi' // Finnish
  | 'no' // Norwegian
  | 'uk' // Ukrainian
  | 'bg' // Bulgarian
  | 'hr' // Croatian
  | 'sk' // Slovak
  | 'sl' // Slovenian
  | 'et' // Estonian
  | 'lv' // Latvian
  | 'lt' // Lithuanian
  | 'sr' // Serbian
  | 'ca' // Catalan
  | 'eu' // Basque
  | 'gl' // Galician
  | 'is' // Icelandic
  | 'mk' // Macedonian
  | 'mt' // Maltese
  | 'cy' // Welsh
  | 'ga' // Irish
  | 'gd' // Scottish Gaelic
  | 'be' // Belarusian
  | 'hy' // Armenian
  | 'ka' // Georgian
  | 'az' // Azerbaijani
  | 'uz' // Uzbek
  | 'kk' // Kazakh
  | 'ky' // Kyrgyz
  | 'tg' // Tajik
  | 'mn' // Mongolian
  | 'ne' // Nepali
  | 'si' // Sinhala
  | 'km' // Khmer
  | 'lo' // Lao
  | 'my' // Burmese
  | 'jw' // Javanese
  | 'su' // Sundanese
  | 'yo' // Yoruba
  | 'ig' // Igbo
  | 'ha' // Hausa
  | 'sw' // Swahili
  | 'am' // Amharic
  | 'so' // Somali
  | 'zu' // Zulu
  | 'xh' // Xhosa
  | 'st' // Sesotho
  | 'sn' // Shona
  | 'ny' // Chichewa
  | 'mg' // Malagasy
  | 'rw' // Kinyarwanda
  | 'sm' // Samoan
  | 'to' // Tongan
  | 'fj' // Fijian
  | 'mi' // Maori
  | 'ty' // Tahitian
  | 'haw' // Hawaiian
  | 'ceb' // Cebuano
  | 'fil' // Filipino
  | 'hmn' // Hmong
  | 'yi' // Yiddish
  | 'fy' // Frisian
  | 'ht' // Haitian Creole
  | 'co' // Corsican
  | 'lb' // Luxembourgish
  | 'gu' // Gujarati
  | 'pa' // Punjabi
  | 'bn' // Bengali
  | 'ta' // Tamil
  | 'te' // Telugu
  | 'kn' // Kannada
  | 'ml' // Malayalam
  | 'mr' // Marathi
  | 'sa' // Sanskrit
  | 'sd' // Sindhi
  | 'ur' // Urdu
  | 'ps' // Pashto
  | 'ku' // Kurdish
  | 'ckb' // Central Kurdish
  | 'bo' // Tibetan
  | 'dz' // Dzongkha
  | 'ug' // Uyghur
  | 'tt' // Tatar
  | 'cv' // Chuvash
  | 'ba' // Bashkir
  | 'sah' // Sakha
  | 'os' // Ossetian
  | 'ab' // Abkhaz
  | 'aa' // Afar
  | 'af' // Afrikaans
  | 'ak' // Akan
  | 'sq' // Albanian
  | 'an' // Aragonese
  | 'as' // Assamese
  | 'av' // Avaric
  | 'ay' // Aymara
  | 'bm' // Bambara
  | 'bi' // Bislama
  | 'bs' // Bosnian
  | 'br' // Breton
  | 'ch' // Chamorro
  | 'ce' // Chechen
  | 'cu' // Church Slavic
  | 'kw' // Cornish
  | 'cr' // Cree
  | 'dv' // Divehi
  | 'ee' // Ewe
  | 'fo' // Faroese
  | 'ff' // Fulah
  | 'gn' // Guarani
  | 'gv' // Manx
  | 'ho' // Hiri Motu
  | 'hz' // Herero
  | 'ia' // Interlingua
  | 'ie' // Interlingue
  | 'iu' // Inuktitut
  | 'ik' // Inupiaq
  | 'jv' // Javanese
  | 'kl' // Kalaallisut
  | 'kr' // Kanuri
  | 'ki' // Kikuyu
  | 'kj' // Kuanyama
  | 'li' // Limburgish
  | 'ln' // Lingala
  | 'lu' // Luba-Katanga
  | 'lg' // Ganda
  | 'mh' // Marshallese
  | 'mo' // Moldavian
  | 'na' // Nauru
  | 'ng' // Ndonga
  | 'nr' // South Ndebele
  | 'oc' // Occitan
  | 'oj' // Ojibwa
  | 'om' // Oromo
  | 'or' // Oriya
  | 'pi' // Pali
  | 'qu' // Quechua
  | 'rm' // Romansh
  | 'rn' // Rundi
  | 'sc' // Sardinian
  | 'se' // Northern Sami
  | 'sg' // Sango
  | 'ss' // Swati
  | 'tl' // Tagalog
  | 'tw' // Twi
  | 've' // Venda
  | 'vo' // Volapük
  | 'wa' // Walloon
  | 'wo' // Wolof
  | 'za' // Zhuang
  | 'zu'; // Zulu

/**
 * Props for the LanguageSelector component
 */
export interface LanguageSelectorProps {
  value: Language;
  onChange: (language: Language) => void;
  label: string;
}

/**
 * Props for the TranslationBox component
 */
export interface TranslationBoxProps {
  value: string;
  onChange?: (text: string) => void;
  onTranslate?: () => void;
  placeholder: string;
  readOnly?: boolean;
  isLoading?: boolean;
}

/**
 * Props for the SwapButton component
 */
export interface SwapButtonProps {
  onClick: () => void;
}
