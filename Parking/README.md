# Settings

#install

After download the application please launch the command line npm install for install dependencies.

#Execute 
after install the dependencies please launch the command line npm start to run the application.

# Explanation
In this example we have a simulation about the manage of a simple parking. In this parking you can park some veicle as Car, Truck or motorbike.The parking as a max size of 15 veicle.
In this simulation I have build three class (car,motorbike and truck) that extends the clas Veicle.

In this application we have 3 components (form-parking,veicle and veicle-list ) and 5 class (car,truck,motorbike,parking and veicle).

The class car, truck and motorbike extends the class veicle.

# Class Parking (garage)
max-place = 15
typeVeicleAllowed []

# Class Veicle (veicolo)
    type: string;
    id: number;

#Class Motorbike(moto) extends Veicle
    super(type, id)
    engine: string

#Class Truck(furgone) extends Veicle
    super(type, id)
    capacity: string

#Class Car(auto) extends Veicle
    super(type, id)
    engine: string
    doors: string

# Directive from manage the img and style
    CcMotoHoverDirective
    CcFurgoneHoverDirective
    CcAutoHoverDirective

