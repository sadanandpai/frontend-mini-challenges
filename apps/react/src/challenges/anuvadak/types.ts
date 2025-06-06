/**
 * Supported language codes for translation
 */
export type Language =
  | 'aa' // Afar
  | 'ab' // Abkhaz
  | 'af' // Afrikaans
  | 'ak' // Akan
  | 'am' // Amharic
  | 'an' // Aragonese
  | 'ar' // Arabic
  | 'as' // Assamese
  | 'av' // Avaric
  | 'ay' // Aymara
  | 'az' // Azerbaijani
  | 'ba' // Bashkir
  | 'be' // Belarusian
  | 'bg' // Bulgarian
  | 'bi' // Bislama
  | 'bm' // Bambara
  | 'bn' // Bengali
  | 'bo' // Tibetan
  | 'br' // Breton
  | 'bs' // Bosnian
  | 'ca' // Catalan
  | 'ce' // Chechen
  | 'ceb' // Cebuano
  | 'ch' // Chamorro
  | 'ckb' // Central Kurdish
  | 'co' // Corsican
  | 'cr' // Cree
  | 'cs' // Czech
  | 'cu' // Church Slavic
  | 'cv' // Chuvash
  | 'cy' // Welsh
  | 'da' // Danish
  | 'de' // German
  | 'dv' // Divehi
  | 'dz' // Dzongkha
  | 'ee' // Ewe
  | 'el' // Greek
  | 'en' // English
  | 'eo' // Esperanto
  | 'es' // Spanish
  | 'et' // Estonian
  | 'eu' // Basque
  | 'fa' // Persian
  | 'ff' // Fulah
  | 'fi' // Finnish
  | 'fil' // Filipino
  | 'fj' // Fijian
  | 'fo' // Faroese
  | 'fr' // French
  | 'fy' // Frisian
  | 'ga' // Irish
  | 'gd' // Scottish Gaelic
  | 'gl' // Galician
  | 'gn' // Guarani
  | 'gu' // Gujarati
  | 'gv' // Manx
  | 'ha' // Hausa
  | 'haw' // Hawaiian
  | 'he' // Hebrew
  | 'hi' // Hindi
  | 'hmn' // Hmong
  | 'ho' // Hiri Motu
  | 'hr' // Croatian
  | 'ht' // Haitian Creole
  | 'hu' // Hungarian
  | 'hy' // Armenian
  | 'hz' // Herero
  | 'ia' // Interlingua
  | 'id' // Indonesian
  | 'ie' // Interlingue
  | 'ig' // Igbo
  | 'ii' // Sichuan Yi
  | 'ik' // Inupiaq
  | 'io' // Ido
  | 'is' // Icelandic
  | 'it' // Italian
  | 'iu' // Inuktitut
  | 'ja' // Japanese
  | 'jv' // Javanese
  | 'jw' // Javanese (alternative code)
  | 'ka' // Georgian
  | 'kg' // Kongo
  | 'ki' // Kikuyu
  | 'kj' // Kuanyama
  | 'kk' // Kazakh
  | 'kl' // Kalaallisut
  | 'km' // Khmer
  | 'kn' // Kannada
  | 'ko' // Korean
  | 'kr' // Kanuri
  | 'ks' // Kashmiri
  | 'ku' // Kurdish
  | 'kv' // Komi
  | 'kw' // Cornish
  | 'ky' // Kyrgyz
  | 'la' // Latin
  | 'lb' // Luxembourgish
  | 'lg' // Ganda
  | 'li' // Limburgish
  | 'ln' // Lingala
  | 'lo' // Lao
  | 'lt' // Lithuanian
  | 'lu' // Luba-Katanga
  | 'lv' // Latvian
  | 'mg' // Malagasy
  | 'mh' // Marshallese
  | 'mi' // Maori
  | 'mk' // Macedonian
  | 'ml' // Malayalam
  | 'mn' // Mongolian
  | 'mo' // Moldavian
  | 'mr' // Marathi
  | 'ms' // Malay
  | 'mt' // Maltese
  | 'my' // Burmese
  | 'na' // Nauru
  | 'nb' // Norwegian Bokmål
  | 'nd' // North Ndebele
  | 'ne' // Nepali
  | 'ng' // Ndonga
  | 'nl' // Dutch
  | 'nn' // Norwegian Nynorsk
  | 'no' // Norwegian
  | 'nr' // South Ndebele
  | 'nv' // Navajo
  | 'ny' // Chichewa
  | 'oc' // Occitan
  | 'oj' // Ojibwa
  | 'om' // Oromo
  | 'or' // Oriya
  | 'os' // Ossetian
  | 'pa' // Punjabi
  | 'pi' // Pali
  | 'pl' // Polish
  | 'ps' // Pashto
  | 'pt' // Portuguese
  | 'qu' // Quechua
  | 'rm' // Romansh
  | 'rn' // Rundi
  | 'ro' // Romanian
  | 'ru' // Russian
  | 'rw' // Kinyarwanda
  | 'sa' // Sanskrit
  | 'sah' // Sakha
  | 'sc' // Sardinian
  | 'sd' // Sindhi
  | 'se' // Northern Sami
  | 'sg' // Sango
  | 'si' // Sinhala
  | 'sk' // Slovak
  | 'sl' // Slovenian
  | 'sm' // Samoan
  | 'sn' // Shona
  | 'so' // Somali
  | 'sq' // Albanian
  | 'sr' // Serbian
  | 'ss' // Swati
  | 'st' // Sesotho
  | 'su' // Sundanese
  | 'sv' // Swedish
  | 'sw' // Swahili
  | 'ta' // Tamil
  | 'te' // Telugu
  | 'tg' // Tajik
  | 'th' // Thai
  | 'ti' // Tigrinya
  | 'tk' // Turkmen
  | 'tl' // Tagalog
  | 'tn' // Tswana
  | 'to' // Tongan
  | 'tr' // Turkish
  | 'ts' // Tsonga
  | 'tt' // Tatar
  | 'tw' // Twi
  | 'ty' // Tahitian
  | 'ug' // Uyghur
  | 'uk' // Ukrainian
  | 'ur' // Urdu
  | 'uz' // Uzbek
  | 've' // Venda
  | 'vi' // Vietnamese
  | 'vo' // Volapük
  | 'wa' // Walloon
  | 'wo' // Wolof
  | 'xh' // Xhosa
  | 'yi' // Yiddish
  | 'yo' // Yoruba
  | 'za' // Zhuang
  | 'zh' // Chinese
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
