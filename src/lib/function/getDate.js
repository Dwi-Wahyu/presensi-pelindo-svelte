import moment from 'moment';

export default function getDateInWeek() {
	const weekStart = moment().startOf('week');
	const weekEnd = moment().endOf('week');

	const tanggalMinggu = [];

	while (weekEnd.isAfter(weekStart)) {
		tanggalMinggu.push(weekEnd.format('YYYY-MM-DD'));

		weekEnd.subtract(1, 'day');
	}

	return tanggalMinggu;
}
