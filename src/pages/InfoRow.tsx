

interface InfoRowProps {
  label: string;
  value?: string;
  sliceLength?: number;
}

const InfoRow = ({ label, value = "", sliceLength }: InfoRowProps) => {
  const displayValue =
    sliceLength && value.length > sliceLength
      ? `${value.slice(0, sliceLength)}...`
      : value;

  return (
    <div className="flex justify-between items-center w-full mt-4" data-aos="zoom-in">
      <p className="text-black font-medium w-1/3">{label}</p>
      <p
        className="text-[#006666] font-semibold w-2/3 text-right truncate"
        title={value} // full text on hover
      >
        {displayValue}
      </p>
    </div>
  );
};


export default InfoRow;