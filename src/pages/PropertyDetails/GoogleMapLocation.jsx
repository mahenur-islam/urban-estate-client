const GoogleMapLocation = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.728360573327!2d-122.44227768853726!3d37.77296707186898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580ae89938497%3A0xf8061dc8c42d72c0!2s1234%20Oak%20St%2C%20San%20Francisco%2C%20CA%2094117%2C%20USA!5e0!3m2!1sen!2sbd!4v1708963935126!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
};

export default GoogleMapLocation;
