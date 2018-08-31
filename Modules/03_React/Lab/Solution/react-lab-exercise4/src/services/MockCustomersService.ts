import ICustomer from "./../models/ICustomer"
import ICustomerDetail from "../models/ICustomerDetail";
import ICustomerService from "../models/ICustomerService";

export default class MockCustomersService implements ICustomerService {

  getCustomers(): Promise<ICustomer[]> {

    let customersWithOutDetail: ICustomer[] = this.customers.map(customer => <ICustomer>{
      "CustomerId": customer.CustomerId,
      "FirstName": customer.FirstName,
      "LastName": customer.LastName,
      "Company": customer.Company,
      "EmailAddress": customer.EmailAddress,
      "WorkPhone": customer.WorkPhone,
      "HomePhone": customer.HomePhone
    });

    return Promise.resolve(customersWithOutDetail);
  }

  getCustomersByLastName = (lastNameSearch: string): Promise<ICustomer[]> => {

    let customersWithOutDetail: ICustomer[] = this.customers.map(customer => <ICustomer>{
      "CustomerId": customer.CustomerId,
      "FirstName": customer.FirstName,
      "LastName": customer.LastName,
      "Company": customer.Company,
      "EmailAddress": customer.EmailAddress,
      "WorkPhone": customer.WorkPhone,
      "HomePhone": customer.HomePhone
    });

    let filteredCustomers = customersWithOutDetail.filter(customer => customer.LastName.startsWith(lastNameSearch))!;

    return Promise.resolve(filteredCustomers);
  }

  getCustomer = (customerId: string): Promise<ICustomerDetail> => {
    let customer: ICustomerDetail = this.customers.find(customer => customerId == customerId)!;
    return Promise.resolve(customer);
  }

  private customers: ICustomerDetail[] = [
    {
      "CustomerId": "1",
      "FirstName": "Darwin",
      "LastName": "Collins",
      "Company": "Trioptimum Corp",
      "EmailAddress": "Darwin.Collins@TrioptimumCorp.com",
      "WorkPhone": "1(210)777-4444",
      "HomePhone": "1(210)444-4444",
      "Address": "44 Valley Road",
      "City": "San Antonio",
      "State": "TX",
      "Zipcode": "78245",
      "Gender": "M",
      "BirthDate": "1942-07-16T00:00:00"
    },
    {
      "CustomerId": "2",
      "FirstName": "Jason",
      "LastName": "Nolan",
      "Company": "Zorg Industries",
      "EmailAddress": "Jason.Nolan@ZorgIndustries.com",
      "WorkPhone": "1(480)444-7777",
      "HomePhone": "1(480)777-3333",
      "Address": "96 Country Club Road",
      "City": "Scottsdale",
      "State": "AZ",
      "Zipcode": "85266",
      "Gender": "M",
      "BirthDate": "1964-09-15T00:00:00"
    },
    {
      "CustomerId": "3",
      "FirstName": "Jermaine",
      "LastName": "Ormand",
      "Company": "Umbrella Corp",
      "EmailAddress": "Jermaine.Morton@UmbrellaCorp.com",
      "WorkPhone": "1(303)444-0000",
      "HomePhone": "1(303)666-7777",
      "Address": "520 Hillside Avenue",
      "City": "Denver",
      "State": "CO",
      "Zipcode": "80231",
      "Gender": "M",
      "BirthDate": "1979-02-04T00:00:00"
    },
    {
      "CustomerId": "4",
      "FirstName": "Peggy",
      "LastName": "Brennan",
      "Company": "Zorin Industries",
      "EmailAddress": "Peggy.Brennan@ZorinIndustries.com",
      "WorkPhone": "1(214)333-3333",
      "HomePhone": "1(214)333-3333",
      "Address": "64 Lexington Court",
      "City": "Dallas",
      "State": "TX",
      "Zipcode": "75204",
      "Gender": "F",
      "BirthDate": "1960-09-04T00:00:00"
    },
    {
      "CustomerId": "5",
      "FirstName": "Jordan",
      "LastName": "Gutierrez",
      "Company": "Kwik-E-Mart",
      "EmailAddress": "Jordan.Gutierrez@Kwik-E-Mart.com",
      "WorkPhone": "1(267)111-5555",
      "HomePhone": "1(267)222-8888",
      "Address": "6995 Maple Lane",
      "City": "Philadelphia",
      "State": "PA",
      "Zipcode": "19131",
      "Gender": "F",
      "BirthDate": "1952-05-21T00:00:00"
    },
    {
      "CustomerId": "6",
      "FirstName": "Chrystal",
      "LastName": "Santiago",
      "Company": "Crudgington Brewery",
      "EmailAddress": "Chrystal.Santiago@CrudgingtonBrewery.com",
      "WorkPhone": "1(804)666-5555",
      "HomePhone": "1(804)222-6666",
      "Address": "28 Queen Street",
      "City": "Richmond",
      "State": "VA",
      "Zipcode": "23225",
      "Gender": "F",
      "BirthDate": "1960-05-10T00:00:00"
    },
    {
      "CustomerId": "7",
      "FirstName": "Kasey",
      "LastName": "Quinne",
      "Company": "ComTron",
      "EmailAddress": "Kasey.Morgan@ComTron.com",
      "WorkPhone": "1(305)777-7777",
      "HomePhone": "1(305)222-2222",
      "Address": "18 Creekside Drive",
      "City": "Miami",
      "State": "FL",
      "Zipcode": "33196",
      "Gender": "F",
      "BirthDate": "1938-06-25T00:00:00"
    },
    {
      "CustomerId": "8",
      "FirstName": "Kris",
      "LastName": "Knox",
      "Company": "Crudgington Brewery",
      "EmailAddress": "Kris.Knox@CrudgingtonBrewery.com",
      "WorkPhone": "1(540)777-8888",
      "HomePhone": "1(540)666-7777",
      "Address": "17 5th Street North",
      "City": "Fredericksburg",
      "State": "VA",
      "Zipcode": "22407",
      "Gender": "F",
      "BirthDate": "1950-03-08T00:00:00"
    },
    {
      "CustomerId": "9",
      "FirstName": "Waylon",
      "LastName": "Parks",
      "Company": "New York Inquirer",
      "EmailAddress": "Waylon.Parks@NewYorkInquirer.com",
      "WorkPhone": "1(201)222-2222",
      "HomePhone": "1(201)333-6666",
      "Address": "5514 5th Street East",
      "City": "Jersey City",
      "State": "NJ",
      "Zipcode": "07310",
      "Gender": "M",
      "BirthDate": "1945-03-01T00:00:00"
    },
    {
      "CustomerId": "10",
      "FirstName": "Glenda",
      "LastName": "Yack",
      "Company": "Grim Reaper Airways",
      "EmailAddress": "Glenda.Montoya@GrimReaperAirways.com",
      "WorkPhone": "1(201)222-6666",
      "HomePhone": "1(201)111-0000",
      "Address": "2610 Crescent Street",
      "City": "Jersey City",
      "State": "NJ",
      "Zipcode": "07310",
      "Gender": "F",
      "BirthDate": "1988-01-07T00:00:00"
    },
    {
      "CustomerId": "11",
      "FirstName": "Margo",
      "LastName": "Zuckerberg",
      "Company": "Liandri Mining Corp",
      "EmailAddress": "Margo.McMahon@LiandriMiningCorp.com",
      "WorkPhone": "1(614)111-7777",
      "HomePhone": "1(614)555-4444",
      "Address": "99 Sheffield Drive",
      "City": "Columbus",
      "State": "OH",
      "Zipcode": "43219",
      "Gender": "F",
      "BirthDate": "1961-05-05T00:00:00"
    },
    {
      "CustomerId": "12",
      "FirstName": "Kitty",
      "LastName": "Akers",
      "Company": "VersaLife Corporation",
      "EmailAddress": "Kitty.Herrera@VersaLifeCorporation.com",
      "WorkPhone": "1(415)111-5555",
      "HomePhone": "1(415)777-5555",
      "Address": "632 State Street",
      "City": "San Francisco",
      "State": "CA",
      "Zipcode": "94118",
      "Gender": "F",
      "BirthDate": "1939-06-15T00:00:00"
    },
    {
      "CustomerId": "13",
      "FirstName": "Celina",
      "LastName": "Wagner",
      "Company": "Hanso Foundation",
      "EmailAddress": "Celina.Wagner@HansoFoundation.com",
      "WorkPhone": "1(804)333-6666",
      "HomePhone": "1(804)777-2222",
      "Address": "646 Riverside Drive",
      "City": "Richmond",
      "State": "VA",
      "Zipcode": "23231",
      "Gender": "F",
      "BirthDate": "1992-10-18T00:00:00"
    },
    {
      "CustomerId": "14",
      "FirstName": "Leandro",
      "LastName": "Ruiz",
      "Company": "Izon",
      "EmailAddress": "Leandro.Ruiz@Izon.com",
      "WorkPhone": "1(850)222-0000",
      "HomePhone": "1(850)666-7777",
      "Address": "6571 Surrey Lane",
      "City": "Pensacola",
      "State": "FL",
      "Zipcode": "32503",
      "Gender": "M",
      "BirthDate": "1973-04-16T00:00:00"
    },
    {
      "CustomerId": "15",
      "FirstName": "Johnnie",
      "LastName": "Dudley",
      "Company": "Initech",
      "EmailAddress": "Johnnie.Dudley@Initech.com",
      "WorkPhone": "1(714)666-1111",
      "HomePhone": "1(714)777-0000",
      "Address": "53 Sunset Avenue",
      "City": "Huntington Beach",
      "State": "CA",
      "Zipcode": "92646",
      "Gender": "F",
      "BirthDate": "1962-11-03T00:00:00"
    },
    {
      "CustomerId": "16",
      "FirstName": "Katharine",
      "LastName": "Finch",
      "Company": "Strickland Propane",
      "EmailAddress": "Katharine.Finch@StricklandPropane.com",
      "WorkPhone": "1(706)222-6666",
      "HomePhone": "1(706)111-5555",
      "Address": "7492 6th Street North",
      "City": "Athens",
      "State": "GA",
      "Zipcode": "30606",
      "Gender": "F",
      "BirthDate": "1973-09-14T00:00:00"
    },
    {
      "CustomerId": "17",
      "FirstName": "Jessica",
      "LastName": "Vick",
      "Company": "Strickland Propane",
      "EmailAddress": "Jessica.Marsh@StricklandPropane.com",
      "WorkPhone": "1(850)111-3333",
      "HomePhone": "1(850)333-2222",
      "Address": "9452 Wall Street",
      "City": "Pensacola",
      "State": "FL",
      "Zipcode": "32514",
      "Gender": "F",
      "BirthDate": "1948-11-27T00:00:00"
    },
    {
      "CustomerId": "18",
      "FirstName": "Sallie",
      "LastName": "Wilson",
      "Company": "Tyrell Corp",
      "EmailAddress": "Sallie.Wilson@TyrellCorp.com",
      "WorkPhone": "1(814)222-8888",
      "HomePhone": "1(814)555-5555",
      "Address": "83 Country Club Road",
      "City": "Altoona",
      "State": "PA",
      "Zipcode": "16601",
      "Gender": "F",
      "BirthDate": "1981-03-12T00:00:00"
    },
    {
      "CustomerId": "19",
      "FirstName": "Noel",
      "LastName": "Boyd",
      "Company": "Slate Rock and Gravel",
      "EmailAddress": "Noel.Boyd@SlateRockandGravel.com",
      "WorkPhone": "1(718)222-3333",
      "HomePhone": "1(718)444-7777",
      "Address": "34 Route 20",
      "City": "Brooklyn",
      "State": "NY",
      "Zipcode": "11217",
      "Gender": "M",
      "BirthDate": "1972-11-18T00:00:00"
    },
    {
      "CustomerId": "20",
      "FirstName": "Lacy",
      "LastName": "Parks",
      "Company": "Hanso Foundation",
      "EmailAddress": "Lacy.Parks@HansoFoundation.com",
      "WorkPhone": "1(714)777-0000",
      "HomePhone": "1(714)777-6666",
      "Address": "720 Oak Lane",
      "City": "Irvine",
      "State": "CA",
      "Zipcode": "92602",
      "Gender": "M",
      "BirthDate": "1988-09-03T00:00:00"
    },
    {
      "CustomerId": "21",
      "FirstName": "Malcolm",
      "LastName": "Francis",
      "Company": "Mel's Diner",
      "EmailAddress": "Malcolm.Francis@MelsDiner.com",
      "WorkPhone": "1(508)888-3333",
      "HomePhone": "1(508)444-8888",
      "Address": "57 Country Lane",
      "City": "North Dartmouth",
      "State": "MA",
      "Zipcode": "02747",
      "Gender": "M",
      "BirthDate": "1991-02-04T00:00:00"
    },
    {
      "CustomerId": "22",
      "FirstName": "Hilary",
      "LastName": "Osborne",
      "Company": "Jupiter Mining",
      "EmailAddress": "Hilary.Osborne@JupiterMining.com",
      "WorkPhone": "1(813)777-3333",
      "HomePhone": "1(813)222-4444",
      "Address": "69 Oak Avenue",
      "City": "Wesley Chapel",
      "State": "FL",
      "Zipcode": "33544",
      "Gender": "F",
      "BirthDate": "1954-01-13T00:00:00"
    },
    {
      "CustomerId": "23",
      "FirstName": "Cora",
      "LastName": "Norton",
      "Company": "Sheinhardt Wig Company",
      "EmailAddress": "Cora.Norton@SheinhardtWigCompany.com",
      "WorkPhone": "1(520)333-5555",
      "HomePhone": "1(520)555-7777",
      "Address": "72 Hamilton Road",
      "City": "Tucson",
      "State": "AZ",
      "Zipcode": "85711",
      "Gender": "F",
      "BirthDate": "1978-07-14T00:00:00"
    },
    {
      "CustomerId": "24",
      "FirstName": "Max",
      "LastName": "Duran",
      "Company": "Clampett Oil",
      "EmailAddress": "Max.Duran@ClampettOil.com",
      "WorkPhone": "1(704)333-5555",
      "HomePhone": "1(704)666-3333",
      "Address": "5818 Essex Court",
      "City": "Charlotte",
      "State": "NC",
      "Zipcode": "28216",
      "Gender": "M",
      "BirthDate": "1975-05-07T00:00:00"
    },
    {
      "CustomerId": "25",
      "FirstName": "Judson",
      "LastName": "Pickett",
      "Company": "Fabrikam",
      "EmailAddress": "Judson.Pickett@Fabrikam.com",
      "WorkPhone": "1(916)555-6666",
      "HomePhone": "1(916)333-1111",
      "Address": "9377 Brookside Drive",
      "City": "Folsom",
      "State": "CA",
      "Zipcode": "95630",
      "Gender": "M",
      "BirthDate": "1975-03-03T00:00:00"
    },
    {
      "CustomerId": "26",
      "FirstName": "Rob",
      "LastName": "Guzman",
      "Company": "Culdee Fell Railway",
      "EmailAddress": "Rob.Guzman@CuldeeFellRailway.com",
      "WorkPhone": "1(713)777-6666",
      "HomePhone": "1(713)777-2222",
      "Address": "91 Ivy Lane",
      "City": "Houston",
      "State": "TX",
      "Zipcode": "77007",
      "Gender": "M",
      "BirthDate": "1939-02-01T00:00:00"
    },
    {
      "CustomerId": "27",
      "FirstName": "Morgan",
      "LastName": "Drake",
      "Company": "W.C. Boggs & Co.",
      "EmailAddress": "Morgan.Drake@W.C.Boggs&Co..com",
      "WorkPhone": "1(336)222-8888",
      "HomePhone": "1(336)666-5555",
      "Address": "4327 Holly Court",
      "City": "Winston Salem",
      "State": "NC",
      "Zipcode": "27103",
      "Gender": "F",
      "BirthDate": "1975-10-15T00:00:00"
    },
    {
      "CustomerId": "28",
      "FirstName": "Irving",
      "LastName": "Fields",
      "Company": "Nordyne Defense Dynamics",
      "EmailAddress": "Irving.Fields@NordyneDefenseDynamics.com",
      "WorkPhone": "1(404)777-0000",
      "HomePhone": "1(404)111-6666",
      "Address": "28 Canterbury Road",
      "City": "Atlanta",
      "State": "GA",
      "Zipcode": "30326",
      "Gender": "M",
      "BirthDate": "1952-06-07T00:00:00"
    },
    {
      "CustomerId": "29",
      "FirstName": "Casandra",
      "LastName": "Decker",
      "Company": "Final Fantasy VII",
      "EmailAddress": "Casandra.Decker@FinalFantasyVII.com",
      "WorkPhone": "1(919)888-6666",
      "HomePhone": "1(919)777-7777",
      "Address": "16 East Avenue",
      "City": "Durham",
      "State": "NC",
      "Zipcode": "27707",
      "Gender": "F",
      "BirthDate": "1986-03-15T00:00:00"
    },
    {
      "CustomerId": "30",
      "FirstName": "Yvette",
      "LastName": "Underbar",
      "Company": "Ewing Oil",
      "EmailAddress": "Yvette.McPherson@EwingOil.com",
      "WorkPhone": "1(251)444-2222",
      "HomePhone": "1(251)888-1111",
      "Address": "47 7th Street",
      "City": "Mobile",
      "State": "AL",
      "Zipcode": "36606",
      "Gender": "F",
      "BirthDate": "1984-04-23T00:00:00"
    },
    {
      "CustomerId": "31",
      "FirstName": "Randell",
      "LastName": "Martinez",
      "Company": "Doublemeat Palace",
      "EmailAddress": "Randell.Martinez@DoublemeatPalace.com",
      "WorkPhone": "1(603)111-8888",
      "HomePhone": "1(603)666-6666",
      "Address": "147 Mulberry Court",
      "City": "Nashua",
      "State": "NH",
      "Zipcode": "03060",
      "Gender": "M",
      "BirthDate": "1945-09-16T00:00:00"
    },
    {
      "CustomerId": "32",
      "FirstName": "Sonia",
      "LastName": "Mullins",
      "Company": "Central Perk",
      "EmailAddress": "Sonia.Mullins@CentralPerk.com",
      "WorkPhone": "1(404)444-1111",
      "HomePhone": "1(404)111-8888",
      "Address": "58 Spring Street",
      "City": "Atlanta",
      "State": "GA",
      "Zipcode": "30329",
      "Gender": "F",
      "BirthDate": "1977-10-08T00:00:00"
    },
    {
      "CustomerId": "33",
      "FirstName": "Leanna",
      "LastName": "Ellis",
      "Company": "InGen",
      "EmailAddress": "Leanna.Ellis@InGen.com",
      "WorkPhone": "1(505)666-6666",
      "HomePhone": "1(505)444-0000",
      "Address": "5025 Oak Lane",
      "City": "Santa Fe",
      "State": "NM",
      "Zipcode": "87507",
      "Gender": "F",
      "BirthDate": "1951-05-23T00:00:00"
    },
    {
      "CustomerId": "34",
      "FirstName": "Milan",
      "LastName": "Ingram",
      "Company": "Nordyne Defense Dynamics",
      "EmailAddress": "Milan.Hess@NordyneDefenseDynamics.com",
      "WorkPhone": "1(415)555-3333",
      "HomePhone": "1(415)666-6666",
      "Address": "4524 Augusta Drive",
      "City": "San Francisco",
      "State": "CA",
      "Zipcode": "94118",
      "Gender": "M",
      "BirthDate": "1944-10-13T00:00:00"
    },
    {
      "CustomerId": "35",
      "FirstName": "Peggy",
      "LastName": "Wade",
      "Company": "Brown Streak Railroad",
      "EmailAddress": "Peggy.Wade@BrownStreakRailroad.com",
      "WorkPhone": "1(915)222-5555",
      "HomePhone": "1(915)666-7777",
      "Address": "88 Route 100",
      "City": "El Paso",
      "State": "TX",
      "Zipcode": "79936",
      "Gender": "F",
      "BirthDate": "1956-06-06T00:00:00"
    },
    {
      "CustomerId": "36",
      "FirstName": "Rosalind",
      "LastName": "Ross",
      "Company": "Ecumena",
      "EmailAddress": "Rosalind.Ross@Ecumena.com",
      "WorkPhone": "1(214)777-6666",
      "HomePhone": "1(214)666-8888",
      "Address": "565 Hickory Lane",
      "City": "Dallas",
      "State": "TX",
      "Zipcode": "75204",
      "Gender": "F",
      "BirthDate": "1965-07-07T00:00:00"
    },
    {
      "CustomerId": "37",
      "FirstName": "Elena",
      "LastName": "Herrera",
      "Company": "ComTron",
      "EmailAddress": "Elena.Herrera@ComTron.com",
      "WorkPhone": "1(321)666-2222",
      "HomePhone": "1(321)444-6666",
      "Address": "177 Route 20",
      "City": "Kissimmee",
      "State": "FL",
      "Zipcode": "34747",
      "Gender": "F",
      "BirthDate": "1938-11-18T00:00:00"
    },
    {
      "CustomerId": "38",
      "FirstName": "Michelle",
      "LastName": "Cotton",
      "Company": "Benthic Petroleum",
      "EmailAddress": "Michelle.Cotton@BenthicPetroleum.com",
      "WorkPhone": "1(772)777-6666",
      "HomePhone": "1(772)888-7777",
      "Address": "35 Queen Street",
      "City": "Vero Beach",
      "State": "FL",
      "Zipcode": "32966",
      "Gender": "F",
      "BirthDate": "1948-10-13T00:00:00"
    },
    {
      "CustomerId": "39",
      "FirstName": "Vernon",
      "LastName": "Grant",
      "Company": "Oscorp",
      "EmailAddress": "Vernon.Grant@Oscorp.com",
      "WorkPhone": "1(772)444-4444",
      "HomePhone": "1(772)888-7777",
      "Address": "33 Orchard Avenue",
      "City": "Vero Beach",
      "State": "FL",
      "Zipcode": "32966",
      "Gender": "M",
      "BirthDate": "1941-11-10T00:00:00"
    },
    {
      "CustomerId": "40",
      "FirstName": "Jerome",
      "LastName": "Hensley",
      "Company": "Slate Rock and Gravel",
      "EmailAddress": "Jerome.Hensley@SlateRockandGravel.com",
      "WorkPhone": "1(336)444-4444",
      "HomePhone": "1(336)888-8888",
      "Address": "16 Carriage Drive",
      "City": "Greensboro",
      "State": "NC",
      "Zipcode": "27407",
      "Gender": "M",
      "BirthDate": "1944-10-14T00:00:00"
    },
    {
      "CustomerId": "41",
      "FirstName": "Cecile",
      "LastName": "Hobbs",
      "Company": "Medical Mechanica",
      "EmailAddress": "Cecile.Hobbs@MedicalMechanica.com",
      "WorkPhone": "1(203)888-2222",
      "HomePhone": "1(203)888-5555",
      "Address": "8201 Sycamore Drive",
      "City": "Greenwich",
      "State": "CT",
      "Zipcode": "06830",
      "Gender": "F",
      "BirthDate": "1963-09-14T00:00:00"
    },
    {
      "CustomerId": "42",
      "FirstName": "Tara",
      "LastName": "Hall",
      "Company": "Digivation Industries",
      "EmailAddress": "Tara.Hall@DigivationIndustries.com",
      "WorkPhone": "1(865)111-8888",
      "HomePhone": "1(865)111-8888",
      "Address": "838 Durham Court",
      "City": "Knoxville",
      "State": "TN",
      "Zipcode": "37919",
      "Gender": "F",
      "BirthDate": "1966-04-03T00:00:00"
    },
    {
      "CustomerId": "43",
      "FirstName": "Ana",
      "LastName": "Powell",
      "Company": "Tricell",
      "EmailAddress": "Ana.Powell@Tricell.com",
      "WorkPhone": "1(281)777-4444",
      "HomePhone": "1(281)222-5555",
      "Address": "9746 King Street",
      "City": "Houston",
      "State": "TX",
      "Zipcode": "77094",
      "Gender": "F",
      "BirthDate": "1962-06-02T00:00:00"
    },
    {
      "CustomerId": "44",
      "FirstName": "Lacy",
      "LastName": "Church",
      "Company": "Kwik-E-Mart",
      "EmailAddress": "Lacy.Church@Kwik-E-Mart.com",
      "WorkPhone": "1(323)666-7777",
      "HomePhone": "1(323)777-2222",
      "Address": "173 9th Street",
      "City": "Los Angeles",
      "State": "CA",
      "Zipcode": "90041",
      "Gender": "M",
      "BirthDate": "1965-09-15T00:00:00"
    },
    {
      "CustomerId": "45",
      "FirstName": "Ashley",
      "LastName": "Moon",
      "Company": "New York Inquirer",
      "EmailAddress": "Ashley.Moon@NewYorkInquirer.com",
      "WorkPhone": "1(303)333-4444",
      "HomePhone": "1(303)444-1111",
      "Address": "258 Surrey Lane",
      "City": "Denver",
      "State": "CO",
      "Zipcode": "80238",
      "Gender": "M",
      "BirthDate": "1984-08-10T00:00:00"
    },
    {
      "CustomerId": "46",
      "FirstName": "Cory",
      "LastName": "Bradshaw",
      "Company": "Sirius Cybernetics Corpo",
      "EmailAddress": "Cory.Bradshaw@SiriusCyberneticsCorpo.com",
      "WorkPhone": "1(305)777-7777",
      "HomePhone": "1(305)111-2222",
      "Address": "441 Holly Drive",
      "City": "Miami",
      "State": "FL",
      "Zipcode": "33189",
      "Gender": "M",
      "BirthDate": "1931-08-16T00:00:00"
    },
    {
      "CustomerId": "47",
      "FirstName": "Kerry",
      "LastName": "Johnson",
      "Company": "Itex",
      "EmailAddress": "Kerry.Morrison@Itex.com",
      "WorkPhone": "1(508)888-3333",
      "HomePhone": "1(508)444-1111",
      "Address": "8663 Grant Street",
      "City": "Marlborough",
      "State": "MA",
      "Zipcode": "01752",
      "Gender": "F",
      "BirthDate": "1948-02-03T00:00:00"
    },
    {
      "CustomerId": "48",
      "FirstName": "Modesto",
      "LastName": "Cain",
      "Company": "Central Perk",
      "EmailAddress": "Modesto.Cain@CentralPerk.com",
      "WorkPhone": "1(480)333-6666",
      "HomePhone": "1(480)555-0000",
      "Address": "5629 Franklin Court",
      "City": "Phoenix",
      "State": "AZ",
      "Zipcode": "85044",
      "Gender": "M",
      "BirthDate": "1965-03-06T00:00:00"
    },
    {
      "CustomerId": "49",
      "FirstName": "Alejandro",
      "LastName": "Riley",
      "Company": "Fabrikam",
      "EmailAddress": "Alejandro.Riley@Fabrikam.com",
      "WorkPhone": "1(801)555-8888",
      "HomePhone": "1(801)111-2222",
      "Address": "53 Buckingham Drive",
      "City": "Layton",
      "State": "UT",
      "Zipcode": "84041",
      "Gender": "M",
      "BirthDate": "1954-09-06T00:00:00"
    },
    {
      "CustomerId": "50",
      "FirstName": "Savannah",
      "LastName": "Terrell",
      "Company": "Slate Rock and Gravel",
      "EmailAddress": "Savannah.Terrell@SlateRockandGravel.com",
      "WorkPhone": "1(973)222-0000",
      "HomePhone": "1(973)111-6666",
      "Address": "1279 Orchard Street",
      "City": "Riverdale",
      "State": "NJ",
      "Zipcode": "07457",
      "Gender": "F",
      "BirthDate": "1988-09-21T00:00:00"
    },
    {
      "CustomerId": "51",
      "FirstName": "Clement",
      "LastName": "Atkins",
      "Company": "Trade Federation",
      "EmailAddress": "Clement.Atkins@TradeFederation.com",
      "WorkPhone": "1(305)555-3333",
      "HomePhone": "1(305)888-6666",
      "Address": "9967 Main Street South",
      "City": "Miami",
      "State": "FL",
      "Zipcode": "33143",
      "Gender": "M",
      "BirthDate": "1961-05-16T00:00:00"
    },
    {
      "CustomerId": "52",
      "FirstName": "Bertie",
      "LastName": "Stark",
      "Company": "Office of Scientific Intelligence",
      "EmailAddress": "Bertie.Stark@OfficeofScientificIntelligence.com",
      "WorkPhone": "1(603)222-2222",
      "HomePhone": "1(603)888-1111",
      "Address": "39 Catherine Street",
      "City": "Bedford",
      "State": "NH",
      "Zipcode": "03110",
      "Gender": "F",
      "BirthDate": "1943-06-20T00:00:00"
    },
    {
      "CustomerId": "53",
      "FirstName": "Randi",
      "LastName": "Jones",
      "Company": "Black Mesa Research",
      "EmailAddress": "Randi.Medina@BlackMesaResearch.com",
      "WorkPhone": "1(239)777-8888",
      "HomePhone": "1(239)333-1111",
      "Address": "57 Walnut Street",
      "City": "Naples",
      "State": "FL",
      "Zipcode": "34109",
      "Gender": "F",
      "BirthDate": "1948-04-05T00:00:00"
    },
    {
      "CustomerId": "54",
      "FirstName": "Jerald",
      "LastName": "Evans",
      "Company": "The Hanso Foundation",
      "EmailAddress": "Jerald.Evans@TheHansoFoundation.com",
      "WorkPhone": "1(404)444-5555",
      "HomePhone": "1(404)333-1111",
      "Address": "45 Heather Court",
      "City": "Atlanta",
      "State": "GA",
      "Zipcode": "30329",
      "Gender": "M",
      "BirthDate": "1994-11-20T00:00:00"
    }
  ];

}