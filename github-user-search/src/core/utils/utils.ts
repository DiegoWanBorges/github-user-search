import dayjs from "dayjs"

export const formatDate = ( date:string) =>{
   return dayjs(date,'DD-MM-YYYY').format('DD-MM-YYYY');
} 