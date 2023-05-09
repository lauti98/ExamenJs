function humanizeDate(dateStr) {
    const date = new Date(dateStr);
    const days = ['Domingo', 
                    'Lunes', 
                    'Martes', 
                    'Miércoles', 
                    'Jueves', 
                    'Viernes', 
                     'Sábado'
                   ];
    const months = ['enero', 
                    'febrero', 
                    'marzo', 
                    'abril', 
                    'mayo', 
                    'junio', 
                    'julio', 
                    'agosto', 
                    'septiembre', 
                    'octubre', 
                    'noviembre', 
                    'diciembre'];
    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayOfWeek}, ${dayOfMonth} de ${month} de ${year}`;
  }
  
  console.log(humanizeDate('2022-12-18')); // Domingo, 18 de diciembre de 2022
  