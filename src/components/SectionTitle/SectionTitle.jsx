/* eslint-disable react/prop-types */


const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="md:w-1/3 mx-auto">
            <p className="text-[#D99904] text-center mb-3 italic">{subHeading}</p>
            <h2 className="text-black border-y-2 text-center py-3 text-2xl font-bold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;