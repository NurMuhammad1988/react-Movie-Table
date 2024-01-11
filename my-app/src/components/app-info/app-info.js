import "./app-info.scss";

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
    return (
        <div className="app-info">
            <p className="fs-3 text-uppercase">
                Barcha kinolar soni: {allMoviesCount}
            </p>

            {/* <p  style={{ fontSize: 40  }}>
                Barcha kinolar son i: {allMoviesCount}
            </p> */}
            {/* style berish */}

            <p className="fs-3 text-uppercase">
                Sevimli film: {favouriteMovieCount}
            </p>
        </div>
    );
};

export default AppInfo;
