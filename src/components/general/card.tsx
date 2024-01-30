interface PetData {
    status: string,
    image: string,
    name: string,
    animalType: string,
    address: string,
    petLinkPage: string
};

export default function CardPet(props: PetData) {
    return (
        <div className="border-4 border-[#727272] block rounded-md">
            <div className="w-[220px]">
                <p className={`bg-primary text-[#fff] text-center text-lg py-2`}>{props.status}</p>
                <img src={props.image} alt={`Foto do(a) ${props.animalType}(a) ${props.name}`} width={248} height={139} />
                <h4 className={`bg-[#fff] text-center text-base font-light`}>{props.address}</h4>
            </div>
        </div>
    )
}