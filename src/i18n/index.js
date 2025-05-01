import Vue from 'vue'
import {
	Locale
} from 'vant'
import VueI18n from 'vue-i18n'

import Chinese from './cn'
import ChineseFt from './ft'
import English from './en'
import Vietnam from './vi'
import Thai from './th'
import Indonesia from './id'
import India from './yd'
import Spain from './es'
import Japanese from './jp'
import Malay from './ma'
import Portugal from './pt'
import KO from './ko'
import AR from './ar'
import DE from './de'
import RU from './ru'
import FR from './fr'
import trTR from './teq'

import zhCN from 'vant/lib/locale/lang/zh-CN'
import zhTW from 'vant/lib/locale/lang/zh-TW'
import enUS from 'vant/lib/locale/lang/en-US'
import viVN from './vi'
import thTH from './th'
import idID from './id'
import ydYD from './yd'
// import ydYD from 'vant/lib/locale/lang/en-US'
import esES from 'vant/lib/locale/lang/es-ES'
import jaJP from 'vant/lib/locale/lang/ja-JP'
import maMA from './ma'
import ptPT from './pt'
import UR from './ur'

/*初始化*/
const lang = localStorage['Language'] || Language
let locale = 'zh-TW'
switch (lang) {
	case 'cn':
		locale = 'zh-CN'
		Locale.use('zh-CN', zhCN)
		break;
	case 'ft':
		locale = 'zh-TW'
		Locale.use('zh-TW', zhTW)
		break;
	case 'en':
		locale = 'en-US'
		Locale.use('en-US', enUS)
		break;
	case 'id':
		locale = 'id-ID'
		Locale.use('id-ID', idID)
		break;
	case 'th':
		locale = 'th-TH'
		Locale.use('th-TH', thTH)
		break;
	case 'vi':
		locale = 'vi-VN'
		Locale.use('vi-VN', viVN)
		break;
	case 'yd':
		locale = 'yd-YD'
		Locale.use('yd-YD', ydYD)
		break;
	case 'es':
		locale = 'es-ES'
		Locale.use('es-ES', esES)
		break;
	case 'ja':
		locale = 'ja-JP'
		Locale.use('ja-JP', jaJP)
		break;
  case 'ma':
  	locale = 'ma-MA'
  	Locale.use('ma-MA', maMA)
  	break;
  case 'pt':
  	locale = 'pt-PT'
  	Locale.use('pt-PT', ptPT)
  	break;
  case 'ko':
  	locale = 'ko-KO'
  	Locale.use('ko-KO', KO)
  	break;
  case 'ar':
  	locale = 'ar-AR'
  	Locale.use('ar-AR', AR)
  	break;
  case 'de':
  	locale = 'de-DE'
  	Locale.use('de-DE', DE)
  	break;
  case 'fr':
  	locale = 'fr-FR'
  	Locale.use('fr-FR', FR)
  	break;
  case 'ur':
  	locale = 'ur-UR'
  	Locale.use('ur-UR', UR)
  	break;
  case 'ru':
  	locale = 'ru-RU'
  	Locale.use('ru-RU', RU)
  	break;
  case 'tr':
    locale = 'tr-TR'
    Locale.use('tr-TR', trTR)
    break;
}

Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: locale,
	messages: {
		"zh-CN": Chinese,
		"zh-TW": ChineseFt,
		"en-US": English,
		"id-ID": Indonesia,
		"th-TH": Thai,
		"vi-VN": Vietnam,
		"yd-YD": India,
		"es-ES": Spain,
		"ja-JP": Japanese,
    "ma-MA": Malay,
    "pt-PT": Portugal,
    "ko-KO": KO,
    "ar-AR": AR,
    "de-DE": DE,
    "fr-FR": FR,
    "ur-UR": UR,
    "ru-RU": RU,
    "tr-TR": trTR,

  }
})

/*切換*/
export function SetLanguage(lang) {
	i18n.locale = lang
	switch (lang) {
		case 'zh-CN':
			localStorage['Language'] = 'cn'
			Locale.use('zh-CN', zhCN)
			break;
		case 'zh-TW':
			localStorage['Language'] = 'ft'
			Locale.use('zh-TW', zhTW)
			break;
		case 'en-US':
			localStorage['Language'] = 'en'
			Locale.use('en-US', enUS)
			break;
		case 'id-ID':
			localStorage['Language'] = 'id'
			Locale.use('id-ID', idID)
			break;
		case 'th-TH':
			localStorage['Language'] = 'th'
			Locale.use('th-TH', thTH)
			break;
		case 'vi-VN':
			localStorage['Language'] = 'vi'
			Locale.use('vi-VN', viVN)
			break;
		case 'yd-YD':
			localStorage['Language'] = 'yd'
			Locale.use('yd-YD', ydYD)
			break;
		case 'es-ES':
			localStorage['Language'] = 'es'
			Locale.use('es-ES', esES)
			break;
		case 'ja-JP':
			localStorage['Language'] = 'ja'
			Locale.use('ja-JP', jaJP)
			break;
    case 'ma-MA':
    	localStorage['Language'] = 'ma'
    	Locale.use('ma-MA', maMA)
    	break;
    case 'pt-PT':
    	localStorage['Language'] = 'pt'
    	Locale.use('pt-PT', ptPT)
    	break;
    case 'ko-KO':
    	localStorage['Language'] = 'ko'
    	Locale.use('ko-KO', KO)
    	break;
    case 'ar-AR':
    	localStorage['Language'] = 'ar'
    	Locale.use('ar-AR', AR)
    	break;
    case 'de-DE':
    	localStorage['Language'] = 'de'
    	Locale.use('de-DE', DE)
    	break;
    case 'fr-FR':
    	localStorage['Language'] = 'fr'
    	Locale.use('fr-FR', FR)
    	break;
    case 'ur-UR':
    	localStorage['Language'] = 'ur'
    	Locale.use('ur-UR', UR)
    	break;
    case 'ru-RU':
    	localStorage['Language'] = 'ru'
    	Locale.use('ru-RU', RU)
    	break;
    case 'tr-TR':
      localStorage['Language'] = 'tr'
      Locale.use('tr-TR', trTR)
      break;
	}
}
export default i18n
