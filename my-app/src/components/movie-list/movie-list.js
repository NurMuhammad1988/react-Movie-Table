import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";

const MovieList = ({ data, onDelete, onToggleProp }) => {
    //bu data app.jsdagi server sifatida yozilgan data o'zgaruvchi
    // console.log(props);
    return (
        <ul className="movie-list">
            {/* yani map orqali intirigatsa qilinib sikilga qo'yilib datadagi malumotlar movilistitemga jo'natildi 
            desaham bo'ladi  */}
            {/* jsx ichida massivlarni intirigatsa qilsaham bo'ladi */}
            {data.map((item) => (
                <MovieListItem
                    key={item.id} //UNIQUE YANI UNIKAL YANI TAKRORLANMAS id berilmasa react har yangi component qo'shilganda hammasini qaytadan quradi yani 2 ta component bor bo'lsayu 3 chisi qo'shilsa shunda react oldin yasalgan 2ta componentniham qaytadan yasaydi agar id bilan qo'yilsa faqat yangi qo'shilgan idgina qo'shiladi va yana component serverdan massiv holatda qaytganda 0 dan bosh lanadigan tartib raqamiham o'zgarmaydi yani ichidan birOrtasi udalit qilinsa faqat udalit qilingan component udalit boladi va tartib raqam o'zgarmeydi
                    name={item.name}
                    viewers={item.viewers}
                    favourite={item.favourite}
                    like={item.like}
                    onDelete={() => onDelete(item.id)}
                    onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute("data-toggle"))}
                />

                //// <MovieListItem {...item} />
                //// <MovieListItem {...item} /> manashu ko'rinishi object ochib interpalatsa orqali chaqirish deyiladi yani oson kam kod yoziladigan yo'li
            ))}

            {/* <MovieListItem name="Emire of Osman" viewers={811} />
            <MovieListItem name="Ertugrul" viewers={890} />
            <MovieListItem name="The great Seljuks" viewers={999} /> */}
        </ul>
    );
};

export default MovieList;
