export function set_storage() {
	if (window.localStorage.getItem('gdpr')) {
		return 0;
	} else {
		window.localStorage.setItem('gdpr', 'unconfirmed');
	}
}

window.addEventListener('load', () => set_storage());