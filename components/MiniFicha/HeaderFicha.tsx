import Image from "next/image";

interface HeaderFichaProps {
  title: string;
  subtitle: string;
}

function HeaderFicha({ title, subtitle }: HeaderFichaProps) {
  return (
    <div className="flex flex justify-start py-2 px-4 justify-between bg-primary rounded-t-md text-white">
      <div className="flex flex-col">
        <div className="text-lg"> {title} </div>
        <div className="text-base"> {subtitle} </div>
      </div>
      <div className="">
        <Image src="/Joints Bone.svg" width={60} height={60} alt="icon"/>
      </div>
    </div>
  );
}

export default HeaderFicha;