export interface Order {
    // orderId: string;
    bookId: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state:string;
    pinCode: number;
    landMark: string;
}

//    constructor(
//     orderId: string,
//     book[]: number,
//     addressLine1 : string,
//     addressLine2: string,
//     city: string,
//     state:string,
//     pinCode: number,
//     landMark: string,
//    ){
//     //    this.orderId=orderId;
//        this.book[]= book;
//        this.addressLine1= addressLine1;
//        this.addressLine1= addressLine1;
//        this.addressLine2= addressLine2;
//        this.city= city;
//       this.state=state;
//       this.pinCode=pinCode;
//       this.landMark=landMark;
      
//    }
// }