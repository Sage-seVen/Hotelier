import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { firestore } from "../firebase";

interface BookingData {
  firstName: string;
  lastName: string;
  number: number;
  date: string;
  roomType: string;
  roomNo: number;
}

class Viewbookings extends React.Component {
  state = { dbData: [] as any[] };

  constructor(props: any) {
    super(props);
    this.state = { dbData: [] as any[] };
  }

  componentDidMount() {
    const db = firestore;
    db.collection("bookings")
      .get()
      .then((querySnapshot) => {
        const firebaseData: any[] = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          firebaseData.push(doc.data());
        });
        this.setState({ dbData: firebaseData });
        console.log(this.state.dbData);
      });
  }

  render() {
    return (
      <div>
        Your Booking is
        {this.state.dbData.map((data) => {
          return (
            <div>
              <p>Data Set is </p>
              <p>First name: {data.firstName}</p>
              <p>Last Name: {data.lastName}</p>
              <p>Number: {data.number}</p>
              <p>Booking Email: {data.email}</p>
              <p>Room Type: {data.roomType}</p>
              <p>Room No: {data.roomNo}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Viewbookings;

// function Viewbookings(props: any) {
//   const [dbData, setDbdata] = useState<any[]>([]);
//   const [dataBool, setDataBool] = useState(false);

//   useEffect(() => {
//     const db = firestore;
//     db.collection("bookings")
//       .get()
//       .then((querySnapshot) => {
//         const firebaseData: any[] = [];
//         querySnapshot.forEach((doc) => {
//           console.log(`${doc.id} => ${doc.data()}`);
//           firebaseData.push(doc.data());
//         });
//         setDbdata(firebaseData);
//         console.log(dbData);
//         if (dbData.length > 0) {
//           setDataBool(true);
//         }
//       });
//   }, [dataBool]);

//   return (
//     <div>
//       Your Booking is
//       {dbData.map((data) => {
//         <div>
//           <p>DATA S </p>
//           <p>first name is {data.firstName}</p>
//           <p>{data.lastName}</p>
//           <p>{data.number}</p>
//           <p>{data.email}</p>
//           <p>{data.roomType}</p>
//           <p>{data.roomNo}</p>
//         </div>;
//       })}
//     </div>
//   );
// }

// export default Viewbookings;
