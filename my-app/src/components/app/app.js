import "./app.css";
import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                //dars uchun test server yani server eng yuqorida bo'lishi kerak yani shunda pastdagi content class li divdagi filelargaham bu serverni chaqirsa bo'ladi bu server array yani massiv shuni uchun tepada turish kerak yani kod o'qish qoidasiga muofiq
                {
                    name: "Empire of Osman",
                    viewers: 788,
                    favourite: false,
                    like: false,
                    id: 1,
                },
                {
                    name: "The great Seljuks",
                    viewers: 1091,
                    favourite: false,
                    like: false,
                    id: 2,
                },
                {
                    name: "Kurulis Ertugrul",
                    viewers: 789,
                    favourite: false,
                    like: false,
                    id: 3,
                },
                {
                    name: "The great Seljuks Uyanish",
                    viewers: 977,
                    favourite: false,
                    like: false,
                    id: 4,
                },
                {
                    name: "Salahuddin Quddus Fatihi",
                    viewers: 99977,
                    favourite: false,
                    like: false,
                    id: 5,
                },
            ],

            term: "",
            filter: "all",
        };
    }

    onDelete = (id) => {
        // console.log(id);
        this.setState(({ data }) => ({
            data: data.filter((c) => c.id !== id),

            //const index = data.findIndex((c) => c.id === id);//mutable yani o'zgaruvchan
            // data.splice(index,1)//mutable yani o'zgaruvchan

            // const newArray = data.filter((c) => c.id !== id);//imutable yani o'zgarmas

            // return {
            //     data: data.filter((c) => c.id !== id),
            // };
        }));
    };

    addForm = (item) => {
        const newItem = {
            name: item.name,
            viewers: item.viewers,
            id: uuidv4(),
            favourite: false,
            like: false,
        };
        this.setState(({ data }) => ({
            data: [...data, newItem],
        }));
    };

    onToggleProp = (id, prop) => {
        // console.log(prop);
        this.setState(({ data }) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }

                return item;
            }),
        }));
        // console.log(`favourite ${id}`);
    };

    // onToggleLike = (id) => {

    //     this.setState(({ data }) => ({
    //         data: data.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, like: !item.like };
    //             }

    //             return item;
    //         }),
    //     }));
    //     // console.log(`Like ${id}`);

    // };

    searchHandler = (arr, term) => {
        if (term.length === 0) {
            return arr;
        }

        return arr.filter((item) => item.name.toLowerCase().indexOf(term) > -1);
    };

    filterHandler = (arr, filter) => {
        switch (filter) {
            case "popular":
                return arr.filter((c) => c.like);
            case "mostViewers":
                return arr.filter((c) => c.viewers > 800);
            default:
                return arr;
        }
    };

    updateTermHandler = (term) => this.setState({ term });

    updateFilterHandler = (filter) => this.setState({ filter });

    render() {
        const { data, term, filter } = this.state;
        const allMoviesCount = data.length;
        const favouriteMovieCount = data.filter((c) => c.favourite).length;
        const visibleData = this.filterHandler(
            this.searchHandler(data, term),
            filter
        );

        return (
            <div className="app font-monospace">
                {/*yani bu joyda font-monospase bu shrift chunku bu htmlda cdn.js orqali linki ulab qo'yilgan shu uchun font awesomeni classlari chaqirilganda yani clasnamega yozilganda ishlayveradi */}
                <div className="content">
                    {" "}
                    {/*bu content clasname asosiy content yani saytni asosi hissobladi yani bu asosiy app.jsda bo'ladi */}
                    <AppInfo
                        allMoviesCount={allMoviesCount}
                        favouriteMovieCount={favouriteMovieCount}
                    />
                    <div className="search-panel">
                        <SearchPanel
                            updateTermHandler={this.updateTermHandler}
                        />
                        <AppFilter
                        filter={filter}
                            updateFilterHandler={this.updateFilterHandler}
                        />
                    </div>
                    <MovieList
                        onToggleProp={this.onToggleProp}
                        // onToggleLike={this.onToggleLike}
                        // data={data}
                        data={visibleData}
                        onDelete={this.onDelete}
                    />
                    {/* yani data yuqoridagi  serverdagi o'zgaruvchi serverni eng yuqoriga yozib  severni pastdagi hohlagan componentga shu tarzda chaqirib ishlatish mumkun */}
                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        );
    }
}
export default App;
