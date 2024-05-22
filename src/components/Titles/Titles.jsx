

const Titles = ({title, subTitle}) => {
    return (
        <div className="text-center w-3/12 mx-auto my-10">
            <p className="font-semibold text-yellow-600">{subTitle}</p>
            <h1 className="text-2xl font-semibold border-y-2 py-2 mt-2 border-gray-400">{title}</h1>
        </div>
    );
};

export default Titles;