export type Dog = {
    id: string,
    name: string;
    breed: string;
    age: string;
    gender: string;
    image: string;
    isForAdoption: boolean;
    weight?: string;
    description?: string;
    gallery?: string[],
    details?: string;
    intro_video?: string;
    kciCertified?: boolean;
}

const Dogs: Dog[] = [
    {
        id: '1',
        name: 'Max',
        breed: 'Labrador',
        age: '4 years',
        gender: 'male',
        image: '/assets/images/dogs/max.jpg',
        kciCertified: true,
        isForAdoption: false,
        weight: '35 kg',
        intro_video: 'https://youtu.be/9iPMlLgYwsg',
        gallery: [
            '/assets/images/dogs/max-gm-1.jpg',
            '/assets/images/dogs/max-gm-2.jpg',
            '/assets/images/dogs/max-gm-3.jpg',
            '/assets/images/dogs/max-gm-4.webp',
            '/assets/images/dogs/max-gm-5.jpg',
            '/assets/images/dogs/max-gm-6.jpg',
        ],
        details: `
        <h2>About Max</h2>
        <p>When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures.</p>
        <p>Ultricesin Bernese Mountain Dog iaculis nunc sed augue lacus viverra vitae. Est Malteselorem ipsum dolor sit amet. Elementum Cavalier King Charles Spaniel tempusegestas sed sed risus Pomeranian pretium. Viverra Havanese accumsanin nisl nisi. Laoreet sit amet cursus Bolognese sit amet dictum. Ac BichonFrise turpis egestas.</p>
        <h3>Know more about Max</h3>
        <p>Consequat id Golden Retriever porta nibh venenatis crassed. Iaculis nunc sed Bulldog augue lacus. Vitae suscipit tellus maurisa diam. Vestibulum lectus Beagle mauris ultrices eros in Siberian Husky cursus turpis. Dictum sit ame.</p>
        <ul>
            <li>Makes the body slenderer and the figure</li>
            <li>Having slimmer shapely thighs and maximum</li>
            <li>Makes the skin smoother, more elastic</li>
            <li>Cleanses the body of waste substances</li>
        </ul>
        <h3>Max like...</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque pulvinar tellus faucibus molestie. Curabitur quis tincidunt purus. Aliquam quam dui, ultricies eget molestie nec, efficitur sit amet nisl. Donec hendrerit.</p>
        `
    },



    {
        id: '2',
        name: 'Becca',
        breed: 'Doberman',
        age: '1 years',
        gender: 'female',
        image: '/assets/images/dogs/Becca.jpg',
        kciCertified: true,
        isForAdoption: false,
        weight: '30 kg',
        gallery: [
            '/assets/images/dogs/becca-gm-1.jpg',
            '/assets/images/dogs/becca-gm-2.jpg',
            '/assets/images/dogs/becca-gm-3.jpg',
            '/assets/images/dogs/becca-gm-4.jpg',
            '/assets/images/dogs/becca-gm-5.webp',
            '/assets/images/dogs/becca-gm-6.jpg',
        ],
        intro_video: 'https://youtu.be/RVSz19clh8M',
        details: `
        <h2>About Becca</h2>
        <p>When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures.</p>
        <p>Ultricesin Bernese Mountain Dog iaculis nunc sed augue lacus viverra vitae. Est Malteselorem ipsum dolor sit amet. Elementum Cavalier King Charles Spaniel tempusegestas sed sed risus Pomeranian pretium. Viverra Havanese accumsanin nisl nisi. Laoreet sit amet cursus Bolognese sit amet dictum. Ac BichonFrise turpis egestas.</p>
        <h3>Know more about Max</h3>
        <p>Consequat id Golden Retriever porta nibh venenatis crassed. Iaculis nunc sed Bulldog augue lacus. Vitae suscipit tellus maurisa diam. Vestibulum lectus Beagle mauris ultrices eros in Siberian Husky cursus turpis. Dictum sit ame.</p>
        <ul>
            <li>Makes the body slenderer and the figure</li>
            <li>Having slimmer shapely thighs and maximum</li>
            <li>Makes the skin smoother, more elastic</li>
            <li>Cleanses the body of waste substances</li>
        </ul>
        <h3>Becca like...</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque pulvinar tellus faucibus molestie. Curabitur quis tincidunt purus. Aliquam quam dui, ultricies eget molestie nec, efficitur sit amet nisl. Donec hendrerit.</p>
        `
    },
    {
        id: '3',
        name: 'Duke',
        breed: 'Golden Retreiver',
        age: '2 years',
        gender: 'male',
        kciCertified: true,
        image: '/assets/images/dogs/Duke-2.jpg',
        isForAdoption: false,
        weight: '33 kg',
        gallery: [
            '/assets/images/dogs/duke-gm-1.jpg',
            '/assets/images/dogs/duke-gm-2.jpg',
            '/assets/images/dogs/duke-gm-3.jpg',
            '/assets/images/dogs/duke-gm-4.jpg',
            '/assets/images/dogs/duke-gm-5.jpg',
            '/assets/images/dogs/duke-gm-6.jpg',
        ],
        intro_video: 'https://youtu.be/P48G1k56mvE',
        details: `
        <h2>About Duke</h2>
        <p>When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures.</p>
        <p>Ultricesin Bernese Mountain Dog iaculis nunc sed augue lacus viverra vitae. Est Malteselorem ipsum dolor sit amet. Elementum Cavalier King Charles Spaniel tempusegestas sed sed risus Pomeranian pretium. Viverra Havanese accumsanin nisl nisi. Laoreet sit amet cursus Bolognese sit amet dictum. Ac BichonFrise turpis egestas.</p>
        <h3>Know more about Max</h3>
        <p>Consequat id Golden Retriever porta nibh venenatis crassed. Iaculis nunc sed Bulldog augue lacus. Vitae suscipit tellus maurisa diam. Vestibulum lectus Beagle mauris ultrices eros in Siberian Husky cursus turpis. Dictum sit ame.</p>
        <ul>
            <li>Makes the body slenderer and the figure</li>
            <li>Having slimmer shapely thighs and maximum</li>
            <li>Makes the skin smoother, more elastic</li>
            <li>Cleanses the body of waste substances</li>
        </ul>
        <h3>Duke like...</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque pulvinar tellus faucibus molestie. Curabitur quis tincidunt purus. Aliquam quam dui, ultricies eget molestie nec, efficitur sit amet nisl. Donec hendrerit.</p>
        `
    },
    {
        id: '4',
        name: 'Tyson',
        breed: 'Rottweiler ',
        age: '4 years',
        gender: 'male',
        kciCertified: true,
        image: '/assets/images/dogs/Tyson.webp',
        isForAdoption: false,
        weight: "38 kg",
        gallery: [
            '/assets/images/dogs/tyson-gm-1.jpg',
            '/assets/images/dogs/tyson-gm-2.jpg',
            '/assets/images/dogs/tyson-gm-3.jpg',
            '/assets/images/dogs/tyson-gm-4.jpg',
            '/assets/images/dogs/tyson-gm-5.jpg',
            '/assets/images/dogs/tyson-gm-6.jpg',
        ],
        intro_video: 'https://youtu.be/2hV-b63Pigc',
        details: `
        <h2>About Tyson</h2>
        <p>When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures.</p>
        <p>Ultricesin Bernese Mountain Dog iaculis nunc sed augue lacus viverra vitae. Est Malteselorem ipsum dolor sit amet. Elementum Cavalier King Charles Spaniel tempusegestas sed sed risus Pomeranian pretium. Viverra Havanese accumsanin nisl nisi. Laoreet sit amet cursus Bolognese sit amet dictum. Ac BichonFrise turpis egestas.</p>
        <h3>Know more about Max</h3>
        <p>Consequat id Golden Retriever porta nibh venenatis crassed. Iaculis nunc sed Bulldog augue lacus. Vitae suscipit tellus maurisa diam. Vestibulum lectus Beagle mauris ultrices eros in Siberian Husky cursus turpis. Dictum sit ame.</p>
        <ul>
            <li>Makes the body slenderer and the figure</li>
            <li>Having slimmer shapely thighs and maximum</li>
            <li>Makes the skin smoother, more elastic</li>
            <li>Cleanses the body of waste substances</li>
        </ul>
        <h3>Tyson like...</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque pulvinar tellus faucibus molestie. Curabitur quis tincidunt purus. Aliquam quam dui, ultricies eget molestie nec, efficitur sit amet nisl. Donec hendrerit.</p>
        `
    },
    {
        id: '5',
        name: 'Lexi',
        breed: 'Beagel',
        kciCertified: true,
        age: '8 months',
        gender: 'female',
        image: '/assets/images/dogs/Lexi.jpg',
        isForAdoption: false,
        weight: '18 kg',
        gallery: [
            '/assets/images/dogs/lexi-gm-1.webp',
            '/assets/images/dogs/lexi-gm-2.jpg',
            '/assets/images/dogs/lexi-gm-3.jpg',
            '/assets/images/dogs/lexi-gm-4.jpg',
            '/assets/images/dogs/lexi-gm-5.jpg',
            '/assets/images/dogs/lexi-gm-6.jpg',
        ],
        intro_video: 'https://youtu.be/8nY5VgXp3hc',
        details: `
        <h2>About Lexi</h2>
        <p>When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures.</p>
        <p>Ultricesin Bernese Mountain Dog iaculis nunc sed augue lacus viverra vitae. Est Malteselorem ipsum dolor sit amet. Elementum Cavalier King Charles Spaniel tempusegestas sed sed risus Pomeranian pretium. Viverra Havanese accumsanin nisl nisi. Laoreet sit amet cursus Bolognese sit amet dictum. Ac BichonFrise turpis egestas.</p>
        <h3>Know more about Max</h3>
        <p>Consequat id Golden Retriever porta nibh venenatis crassed. Iaculis nunc sed Bulldog augue lacus. Vitae suscipit tellus maurisa diam. Vestibulum lectus Beagle mauris ultrices eros in Siberian Husky cursus turpis. Dictum sit ame.</p>
        <ul>
            <li>Makes the body slenderer and the figure</li>
            <li>Having slimmer shapely thighs and maximum</li>
            <li>Makes the skin smoother, more elastic</li>
            <li>Cleanses the body of waste substances</li>
        </ul>
        <h3>Lexi like...</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque pulvinar tellus faucibus molestie. Curabitur quis tincidunt purus. Aliquam quam dui, ultricies eget molestie nec, efficitur sit amet nisl. Donec hendrerit.</p>
        `
    },
    {
        id: '6',
        name: 'Ricky',
        breed: 'German Shepherd',
        age: '1 year',
        gender: 'male',
        kciCertified: true,
        image: '/assets/images/dogs/Ricky.jpg',
        isForAdoption: false,
        weight: '36 kg',
        gallery: [
            '/assets/images/dogs/ricky-gm-1.jpg',
            '/assets/images/dogs/ricky-gm-2.webp',
            '/assets/images/dogs/ricky-gm-3.jpg',
            '/assets/images/dogs/ricky-gm-4.jpg',
            '/assets/images/dogs/ricky-gm-5.jpg',
            '/assets/images/dogs/ricky-gm-6.jpg',
        ],
        intro_video: 'https://youtu.be/_cSNWGmN1KI',
        details: `
        <h2>Ricky Max</h2>
        <p>When our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures.</p>
        <p>Ultricesin Bernese Mountain Dog iaculis nunc sed augue lacus viverra vitae. Est Malteselorem ipsum dolor sit amet. Elementum Cavalier King Charles Spaniel tempusegestas sed sed risus Pomeranian pretium. Viverra Havanese accumsanin nisl nisi. Laoreet sit amet cursus Bolognese sit amet dictum. Ac BichonFrise turpis egestas.</p>
        <h3>Know more about Max</h3>
        <p>Consequat id Golden Retriever porta nibh venenatis crassed. Iaculis nunc sed Bulldog augue lacus. Vitae suscipit tellus maurisa diam. Vestibulum lectus Beagle mauris ultrices eros in Siberian Husky cursus turpis. Dictum sit ame.</p>
        <ul>
            <li>Makes the body slenderer and the figure</li>
            <li>Having slimmer shapely thighs and maximum</li>
            <li>Makes the skin smoother, more elastic</li>
            <li>Cleanses the body of waste substances</li>
        </ul>
        <h3>Ricky like...</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque pulvinar tellus faucibus molestie. Curabitur quis tincidunt purus. Aliquam quam dui, ultricies eget molestie nec, efficitur sit amet nisl. Donec hendrerit.</p>
        `
    },
    {
        id: '7',
        name: 'Rottwiler Puppies',
        breed: 'Rottwiler',
        age: '2 months',
        gender: 'male and female',
        kciCertified: true,
        image: '/assets/images/puppies/rp-1.jpg',
        isForAdoption: true,
        weight: '3kg - 4kg',
        gallery: [
            '/assets/images/puppies/rp-1.jpg',
            '/assets/images/puppies/rp-2.jpg',
            '/assets/images/puppies/rp-3.jpg',
            '/assets/images/puppies/rp-4.jpg',
            '/assets/images/puppies/rp-5.jpg',
            '/assets/images/puppies/rp-6.jpg',
        ],
        details: `
        <h2>5 Puppies Available</h2>
        `
    },
    {
        id: '8',
        name: 'Golden Retriver Puppies',
        breed: 'Golden Retriver',
        age: '2 months',
        gender: 'male and female',
        kciCertified: true,
        image: '/assets/images/puppies/gr-1.jpg',
        isForAdoption: true,
        weight: '3kg - 4kg',
        gallery: [
            '/assets/images/puppies/gr-1.jpg',
            '/assets/images/puppies/gr-2.jpg',
            '/assets/images/puppies/gr-3.jpg',
            '/assets/images/puppies/gr-4.jpg',
            '/assets/images/puppies/gr-5.jpg',
            '/assets/images/puppies/gr-6.jpg',
        ],
        details: `
        <h2>5 Puppies Available</h2>
        `
    },
    {
        id: '9',
        name: 'Labrador Puppies',
        breed: 'Labrador',
        age: '2 months',
        kciCertified: true,
        gender: 'male and female',
        image: '/assets/images/puppies/lab-1.jpg',
        isForAdoption: true,
        weight: '3kg - 4kg',
        gallery: [
            '/assets/images/puppies/lab-1.jpg',
            '/assets/images/puppies/lab-2.jpg',
            '/assets/images/puppies/lab-3.jpg',
            '/assets/images/puppies/lab-4.jpg',
            '/assets/images/puppies/lab-5.jpg',
            '/assets/images/puppies/lab-6.jpg',
        ],
        details: `
        <h2>5 Puppies Available</h2>
        `
    },
    {
        id: '10',
        name: 'Beagel Puppies',
        breed: 'Beagel',
        age: '2 months',
        kciCertified: true,
        gender: 'male and female',
        image: '/assets/images/puppies/bg-1.jpg',
        isForAdoption: true,
        weight: '3kg - 4kg',
        gallery: [
            '/assets/images/puppies/bg-1.jpg',
            '/assets/images/puppies/bg-2.jpg',
            '/assets/images/puppies/bg-3.jpg',
            '/assets/images/puppies/bg-4.jpg',
            '/assets/images/puppies/bg-5.jpg',
            '/assets/images/puppies/bg-6.jpg',
        ],
        details: `
        <h2>5 Puppies Available</h2>
        `
    },
    {
        id: '11',
        name: 'Greate Dane Puppies',
        breed: 'Greate Dane',
        age: '2 months',
        kciCertified: true,
        gender: 'male and female',
        image: '/assets/images/puppies/gd-1.jpg',
        isForAdoption: true,
        weight: '3kg - 4kg',
        gallery: [
            '/assets/images/puppies/gd-1.jpg',
            '/assets/images/puppies/gd-2.jpg',
            '/assets/images/puppies/gd-3.jpg',
            '/assets/images/puppies/gd-4.jpg',
            '/assets/images/puppies/gd-5.jpg',
        ],
        details: `
        <h2>5 Puppies Available</h2>
        `
    },
]

export class DogApi {


    static getDogs(limit?: number){
        if(limit){
            return Dogs.filter((dog, index)=>{
                return index<limit;
            })
        }
        return Dogs;
    }


    static findById(id: string){
        return Dogs.find(dog => {
            return dog.id === id;
        })
    }

    static findByName(name: string){
        return Dogs.find(dog => {
            return dog.name === name;
        })
    }

    static filterByKV(key: keyof Dog, value: any){
        return Dogs.filter(dog => {
            return Object.hasOwn(dog, key) && dog[key] === value;
        })
    }

    static getAllDogPhotos(){
        const photos: string[] = [];
        const dogPics = Dogs.map(dog => {
           return dog.gallery!;
        })
        dogPics.forEach(dogPicArray => {
            photos.push(...dogPicArray);
        });
        return photos;
    }

    static filter(executer: (dog: Dog) => void){
        return Dogs.filter(executer);
    }

    static dogsForAdoption(limit?: number){
        let count = 0;
        return Dogs.filter((dog, index) => {
            if(dog.isForAdoption){
                count++
                return !limit || limit && limit >= count;
            }
            
        })
    }
    static dogsNotForAdoption(limit?: number){
        let count = 0;
        return Dogs.filter((dog, index) => {
            if(!dog.isForAdoption){
                count++
                return !limit || limit && limit >= count;
            }
            
        })
    }
}

export default Dogs;