import CardPet from "@/components/general/card"

const PetData  = {
    status: 'Perdido',
    image: 'https://blog.meupetclub.com.br/wp-content/uploads/2023/08/cachorrinho-feliz-sorrindo-em-fundo-roxo-isolado-scaled.jpg',
    name: 'Bob',
    animalType: 'cachorro',
    address: 'Rua: Tal, Nº: 12',
    petLinkPage: '/'
};


export default function Home() {
    return (
        <div className="bg-white h-[100vh] p-3 lg:p-20">
            <main className="w-[90%] lg:w-[70%] mx-auto bg-slate-100 p-5 rounded-3xl">
                <div className={'flex items-center gap-2 overflow-x-scroll'}>
                    <CardPet {...PetData} />
                    <CardPet {...PetData} />
                    <CardPet {...PetData} />
                    <CardPet {...PetData} />
                </div>
            </main>
        </div>
    )
}
