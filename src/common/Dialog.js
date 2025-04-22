import { Dialog, Toast} from 'vant'
import i18n from '@/i18n'
import Vue from 'vue'
const dialog = {
	Confirm(msg,event,btnText,title) {
		Dialog.confirm({
			title: title||i18n.t('dialog[0]'),
      message: msg,
      confirmButtonText: btnText||i18n.t('dialog[1]'),
      closeOnPopstate: true
    }).then(event).catch(()=>{});
	},
	Confirm1(msg,event,btnText,title) {
		Dialog.confirm({
			title: title||i18n.t('dialog[0]'),
      message: msg,
      className:'myConfirm',
      confirmButtonText: btnText||i18n.t('dialog[1]'),
      closeOnPopstate: true
    }).then(event).catch(()=>{});
	},
	Alert(msg,event,btn) {
		Dialog.alert({
			title: i18n.t('dialog[0]'),
			message: msg,
			confirmButtonText: btn||i18n.t('dialog[1]'),
			closeOnPopstate: true,
			closeOnClickOverlay: true
		}).then(event).catch(()=>{});
	},
	Alert1(msg,event,btn) {
		Dialog.alert({
			title: i18n.t('dialog[0]'),
			message: msg,
			confirmButtonText: btn||i18n.t('dialog[1]'),
			closeOnPopstate: false,
			closeOnClickOverlay: false
		}).then(event).catch(()=>{});
	},
	Toast(msg,position) {
    Dialog.close();
    Toast.clear();
    Vue.toasted.show(msg, {
      theme: "toasted-primary",
      position: "bottom-center",
      duration : 2000
    });
		// Toast({
		// 	message: msg,
		// 	position: position||'bottom'
		// });
	},
	Loading(msg,el) {
		Toast.loading({
			message: msg||i18n.t('dialog[2]'),
		  duration: 0,
		  forbidClick: true,
		  getContainer: el||'body'
		});
	},
	Close() {
		Dialog.close();
		Toast.clear();
	},
}

export default dialog
