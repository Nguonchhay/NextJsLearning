import Header from './../shared/Header';


const DefaultTemplate = props => {
    return (
        <div>
            <Header />
            {props.page}
        </div>
    )
};

export default DefaultTemplate;