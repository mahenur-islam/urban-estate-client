/* eslint-disable react/prop-types */


const PhotoGallery = ({apartment}) => {
    const {images} = apartment
    return (
        <div>
            <img src={images?.bedroom1}/>
        </div>
    );
};

export default PhotoGallery;