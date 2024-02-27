import dayjs from 'dayjs';
import frLocale from 'dayjs/locale/fr';
import isToday from 'dayjs/plugin/isToday';
import localeData from 'dayjs/plugin/localeData';
import isoWeek from 'dayjs/plugin/isoWeek';
import relativeTime from 'dayjs/plugin/relativeTime';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.locale(frLocale);

dayjs.extend(isToday);
dayjs.extend(isSameOrBefore);

dayjs.extend(localeData);
dayjs.extend(isoWeek);
dayjs.extend(relativeTime);

export const globalMonthsShort = dayjs.monthsShort();
export const dayOfMonth = dayjs().date();

export default dayjs;
