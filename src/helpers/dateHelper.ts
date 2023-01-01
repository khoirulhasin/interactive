import { format } from 'date-fns';

export const dateTimeFormat = (dateTime, formatDate) => {
    return format(dateTime, formatDate);
}

export const dateTimeFormatNow = (formatDate) => {
    return dateTimeFormat(new Date(), formatDate);
} 