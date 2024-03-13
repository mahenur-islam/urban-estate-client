import Heading from '../shared/Heading'
import FeaturedCarousel from './FeaturedCarousel';
const FeaturedListing = () => {
    return (
        <div>
            <Heading title ={'Discover Our Fearuted Listing'}/>
            <div>
                <FeaturedCarousel />
            </div>
        </div>
    );
};

export default FeaturedListing;