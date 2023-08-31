
class movie{
    constructor(title,studio,rating) {
        this.title = title
        this.studio = studio
        this.rating = rating
            
    }

    GetPg(film) {
        for (let value of film) {
            if (value.rating1 == 'pg') {
                return value.rating1;
            }
       }
    }
    
    }

let movie2 = new movie('casino royale', 'Eon productions', 'PG13');

let film = [
    {
        film1: 'a',
        studio1: 's',
        rating1: 'pg'
        
    },
    {
        film1: 'b',
        studio1: 's',
        rating1: 'pg'
        
    },
    {
        film1: 'c',
        studio1: 's',
        rating1: 'pgr1'
        
    }

]

film.GetPg();