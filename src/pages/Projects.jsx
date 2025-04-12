import React, { useState, useEffect } from "react";
import "./Projects.css";

const importAll = (r) => r.keys().map(r);
const projectImages = importAll(require.context("../assets/certificates/", false, /\.(jpg|jpeg|png|gif)$/));

const projectData = [
    {
        "name": "M/s Maharishi Ved Vigyan Vishwa Vidhya Peetham, Maharishi Nagar Noida",
        "startDate": "01-06-2001",
        "endDate": "31-05-2002",
        "status": "Completed"
    },
    {
        "name": "M/s Maharishi Ayurveda Products, Maharishi Nagar, Phase-II, Noida",
        "startDate": "15-04-2002",
        "endDate": "14-11-2002",
        "status": "Completed"
    },
    {
        "name": "M/s Vivek Associates\n2 x 400 KVA Transformer Substation",
        "startDate": "20-07-2002",
        "endDate": "20-11-2002",
        "status": "Completed"
    },
    {
        "name": "M/s La-Zags India Ltd.\n2 x 750 KVA Transformer Substation",
        "startDate": "15-09-2002",
        "endDate": "15-02-2003",
        "status": "Completed"
    },
    {
        "name": "M/s Sahoo Associates\n2 x 500 KVA Transformer Substation",
        "startDate": "15-12-2002",
        "endDate": "15-02-2003",
        "status": "Completed"
    },
    {
        "name": "M/s The Big Way Construction Co. Pvt. Ltd\nA-10, Sector-17, Noida",
        "startDate": "15-07-2003",
        "endDate": "30-08-2003",
        "status": "Completed"
    },
    {
        "name": "M/s Maharishi Polymer Pvt. Ltd Project-Dadri",
        "startDate": "20-07-2003",
        "endDate": "10-12-2003",
        "status": "Completed"
    },
    {
        "name": "M/s Maharishi Ayurveda Corporation Ltd.\nA-14 Mathura Road, Delhi",
        "startDate": "10-08-2003",
        "endDate": "30-04-2004",
        "status": "Completed"
    },
    {
        "name": "M/s Maharishi Ved Vigyan Vishwa Vidhya Peetham, Maharishi Nagar Noida",
        "startDate": "15-11-2003",
        "endDate": "15-03-2004",
        "status": "Completed"
    },
    {
        "name": "M/s Maharishi Ved Vigyan Vishwa Vidhya Peetham, Maharishi Nagar Noida",
        "startDate": "25-05-2004",
        "endDate": "15-01-2006",
        "status": "Completed"
    },
    {
        "name": "M/s Maharishi Ved Vigyan Vishwa Vidhya Peetham, Maharishi Nagar, Noida",
        "startDate": "15-01-2005",
        "endDate": "31-09-2006",
        "status": "Completed"
    },
    {
        "name": "M/s Indian Express News Papers Ltd. Projects- Panchkula",
        "startDate": "25-07-2006",
        "endDate": "11-12-2006",
        "status": "Completed"
    },
    {
        "name": "M/s Gen X Pro Construction Pvt. Ltd\nH.O 65B E/5 Sector-52, Noida",
        "startDate": "20-08-2006",
        "endDate": "14-01-2008",
        "status": "Completed"
    },
    {
        "name": "M/s Indian Express News Papers Ltd.\nProjects- Noida",
        "startDate": "13-10-2006",
        "endDate": "11-12-2007",
        "status": "Completed"
    },
    {
        "name": "M/s Wave Sales India Pvt. Ltd, Call Centre Project , Sector-64, Noida",
        "startDate": "13-10-2006",
        "endDate": "24-05-2007",
        "status": "Completed"
    },
    {
        "name": "M/s Globus Business Park, A-4, Sector-9, Noida.",
        "startDate": "15-02-2007",
        "endDate": "25-12-2008",
        "status": "Completed"
    },
    {
        "name": "M/s Engineering Projects (I) Ltd. PNB Project-Ludhiana Punjab.",
        "startDate": "31-07-2007",
        "endDate": "10-10-2008",
        "status": "Completed"
    },
    {
        "name": "M/s HBL Power System Ltd. Project-IMT Manesar (HR).",
        "startDate": "26-12-2007",
        "endDate": "03-12-2009",
        "status": "Completed"
    },
    {
        "name": "M/s LG Electronics India Pvt. Ltd, Greater Noida. (UP)",
        "startDate": "12-01-2008",
        "endDate": "27-03-2008",
        "status": "Completed"
    },
    {
        "name": "M/s Gen X Pro Construction Pvt. Ltd HQ 65B E/5, Shatabdi Vihar Sector- 52 Noida.",
        "startDate": "27-01-2009",
        "endDate": "15-03-2010",
        "status": "Completed"
    },
    {
        "name": "M/s Aegean Offset Printer Pvt. Ltd. Plot No-220, Ecotech-II, Greater Noida.",
        "startDate": "27-03-2009",
        "endDate": "30-11-2009",
        "status": "Completed"
    },
    {
        "name": "M/s Aerens Europark,\nPlot No-39, Site-IV, Sahibabad, Ghaziabad.",
        "startDate": "14-04-2009",
        "endDate": "12-11-2011",
        "status": "Completed"
    },
    {
        "name": "M/s R.K.Khanna Tennis Stadium, 1, Afrika Avenue, R.K.Puram New Delhi.",
        "startDate": "08-05-2009",
        "endDate": "15-09-2010",
        "status": "Completed"
    },
    {
        "name": "M/s Star News,\nM/s Media Contact & Communication Pvt. Ltd. A-37 Sector-60 Noida.",
        "startDate": "15-01-2010",
        "endDate": "10-04-2010",
        "status": "Completed"
    },
    {
        "name": "M/s National Building Construction Corporation Ltd,\nProject- Roorkee (UA).",
        "startDate": "24-04-2010",
        "endDate": "08-11-2010",
        "status": "Completed"
    },
    

    {
        "name": "M/s WIANXX IMPEX 1003 & 1009\nDevika Tower, Nehru Place, New Delhi.",
        "startDate": "28-08-2010",
        "endDate": "30-11-2010",
        "status": "Completed"
    },
    {
        "name": "M/s Rites Ltd.\nDelhi Police Building, Barakhamba Road, Canought Palace, New Delhi.",
        "startDate": "15-09-2010",
        "endDate": "20-03-2011",
        "status": "Completed"
    },
    {
        "name": "M/s Bharat Electronics Ltd. Bharat Nagar, Ghaziabad.",
        "startDate": "27-09-2010",
        "endDate": "17-09-2011",
        "status": "Completed"
    },
    {
        "name": "M/s Fena (P) Ltd\nPlot No-B17-18, UPSIDC, Surajpur, Greater Noida.",
        "startDate": "20-04-2011",
        "endDate": "19-10-2011",
        "status": "Completed"
    },
    {
        "name": "M/s Bharat Electronics Ltd. Bharat Nagar, Ghaziabad.",
        "startDate": "27-10-2011",
        "endDate": "26-10-2012",
        "status": "Completed"
    },
    {
        "name": "M/s Military Engineer Service\nHQ Chief Engineer R&D New Delhi.",
        "startDate": "26-11-2011",
        "endDate": "09-06-2012",
        "status": "Completed"
    },
    {
        "name": "M/s Army Welfare Housing Organisation,\nProject- Army Nursing College, Deep Nagar, Jalandhar (PB)",
        "startDate": "08-08-2012",
        "endDate": "24-12-2013",
        "status": "Completed"
    },
    {
        "name": "M/s Army Public School, Sector-37, Arun Vihar, Noida",
        "startDate": "10-05-2013",
        "endDate": "25-12-2013",
        "status": "Completed"
    },
    {
        "name": "M/s National Building Construction Corporation Ltd.\nProject- IIT Saharanpur for IIT Roorkee",
        "startDate": "22-01-2014",
        "endDate": "08-03-2014",
        "status": "Completed"
    },
    {
        "name": "KEI Industrial Area Project-DVVVNL, Agra",
        "startDate": "06-06-2014",
        "endDate": "25-10-2016",
        "status": "Completed"
    },
    {
        "name": "National Automotive Testing and R & D Infrastructure Project\nProject- GARC Chennai",
        "startDate": "08-10-2014",
        "endDate": "30-09-2016",
        "status": "Completed"
    },
    {
        "name": "Commander Works Engineer Project- GE North Kolkata",
        "startDate": "27-02-2015",
        "endDate": "25-08-2015",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer (East) Project- Mathura Cantt",
        "startDate": "23-03-2015",
        "endDate": "20-01-2016",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer (AF) Project- AF Stn. Tughlakabad",
        "startDate": "23-04-2015",
        "endDate": "24-12-2015",
        "status": "Completed"
    },
    {
        "name": "Bharat Electronics Ltd\nBharat Nagar, Ghaziabad (Street Light)",
        "startDate": "09-05-2015",
        "endDate": "30-08-2016",
        "status": "Completed"
    },
    {
        "name": "Bharat Electronics Ltd\nBharat Nagar, Ghaziabad (AMC)",
        "startDate": "09-05-2015",
        "endDate": "06-05-2017",
        "status": "Completed"
    },
    {
        "name": "Standing Conference of Public Enterprises, Scope Complex, New Delhi",
        "startDate": "17-05-2016",
        "endDate": "25-08-2016",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer (AF) Project- GE (AF) Tughlakabad",
        "startDate": "08-06-2015",
        "endDate": "06-12-2015",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer (AF)\nProject- AF Stn. Palam Tughlakabad",
        "startDate": "12-06-2015",
        "endDate": "15-05-2016",
        "status": "Completed"
    },
    {
        "name": "HQ Chief Engineer (AF) Nagpur Project- AF Stn. Tughlakabad",
        "startDate": "18-06-2015",
        "endDate": "27-03-2016",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer New Delhi Project- Kashmir House Delhi",
        "startDate": "27-08-2015",
        "endDate": "17-05-2016",
        "status": "Completed"
    },
    {
        "name": "SCOPE,\nSCOPE Complex, Core-8. First Floor, Lodhi Road, New Delhi.",
        "startDate": "20-09-2018",
        "endDate": "13-04-2019",
        "status": "Completed"
    },
    {
        "name": "M/s UMP Power Projects Projects- Ocap",
        "startDate": "01-08-2001",
        "endDate": "31-03-2002",
        "status": "Completed"
    },
    {
        "name": "M/s UMP Power Projects Projects- AFNHB Gurgaon",
        "startDate": "15-07-2002",
        "endDate": "14-12-2002",
        "status": "Completed"
    },
    {
        "name": "M/s Ganpati CGHS Ltd. GH-27, Sector-56 Gurgaon",
        "startDate": "01-09-2003",
        "endDate": "15-12-2004",
        "status": "Completed"
    },
    {
        "name": "M/s Subham CGHS Ltd Project- Faridabad (HR)",
        "startDate": "25-12-2003",
        "endDate": "24-12-2004",
        "status": "Completed"
    },
    {
        "name": "M/s University Teachers Welfare Housing Society,\nSector-45, Gurgaon",
        "startDate": "12-02-2004",
        "endDate": "18-03-2005",
        "status": "Completed"
    },
    {
        "name": "M/s Kribhko Sehkari Avas Smiti Ltd. Sector-35, Noida",
        "startDate": "29-04-2004",
        "endDate": "09-12-2004",
        "status": "Completed"
    },
    {
        "name": "M/s Air Force Naval Housing Board,\nProject-Sector-47, Noida.",
        "startDate": "25-08-2005",
        "endDate": "02-11-2006",
        "status": "Completed"
    },
    {
        "name": "M/s UMP Power Projects Y-300B, Sector-12, Noida",
        "startDate": "15-01-2006",
        "endDate": "11-10-2006",
        "status": "Completed"
    },
    {
        "name": "M/s NFL Employees Sehkari Avas Samiti Ltd.\nProject-Greater Noida",
        "startDate": "26-11-2006",
        "endDate": "05-05-2007",
        "status": "Completed"
    },
    {
        "name": "M/s Air Force Naval Housing Board Project- Lucknow.",
        "startDate": "20-02-2007",
        "endDate": "06-10-2008",
        "status": "Completed"
    },
    {
        "name": "M/s Ghaziabad Development Authority,\nProject- Vaisali Ghaziabad.",
        "startDate": "11-12-2007",
        "endDate": "15-11-2008",
        "status": "Completed"
    },
    {
        "name": "M/s Army Welfare Housing Organisation,\nProject-Greater Noida.-Phase-II",
        "startDate": "10-07-2008",
        "endDate": "23-03-2010",
        "status": "Completed"
    },
    {
        "name": "M/s Army Welfare Housing Organisation,\nProject-Greater Noida. Phase-III",
        "startDate": "10-07-2008",
        "endDate": "23-03-2010",
        "status": "Completed"
    },
    {
        "name": "M/s Army Welfare Housing Organisation\nProject-Gurgaon.",
        "startDate": "25-05-2010",
        "endDate": "29-12-2011",
        "status": "Completed"
    },
    {
        "name": "M/s Air Force Naval Housing Board,\nProject-Greater Noida.",
        "startDate": "03-11-2010",
        "endDate": "21-12-2011",
        "status": "Completed"
    },
    {
        "name": "M/s.  Army Welfare Housing Organisation,\nProject-Panchkula",
        "startDate": "18-03-2011",
        "endDate": "31-03-2013",
        "status": "Completed"
    },
    {
        "name": "M/s Air Force Naval Housing Board,\nProject-Greater Mohali (Kharar)",
        "startDate": "10-05-2011",
        "endDate": "27-03-2014",
        "status": "Completed"
    },
    {
        "name": "M/s Air Force Naval Housing Board,\nProject- (Meerut)",
        "startDate": "19-12-2011",
        "endDate": "23-05-2018",
        "status": "Completed"
    },
    {
        "name": "Value Infra India Pvt. Ltd Project-Morta Village, Rajnagar Extension, Ghaziabad",
        "startDate": "20-09-2012",
        "endDate": "28-03-2014",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer Military Engineer Service (MES), Kalkatta.\nProject- Barrakpore,",
        "startDate": "10-03-2012",
        "endDate": "19-09-2013",
        "status": "Completed"
    },
    {
        "name": "M/s Army Welfare Housing Organisation,\nProject-Dehradun",
        "startDate": "01-07-2013",
        "endDate": "06-10-2015",
        "status": "Completed"
    },
    {
        "name": "Army Welfare Housing Organisation,\nProject-Mohali",
        "startDate": "08-10-2013",
        "endDate": "12-07-2018",
        "status": "Completed"
    },
    {
        "name": "Ansal Lotus Melange Project Pvt. Ltd Project-Orchard Country-II, Block-C, Mohali Punjab",
        "startDate": "16-12-2013",
        "endDate": "15-09-2014",
        "status": "Completed"
    },
    {
        "name": "Ajay Enterprises Pvt. Ltd EROS Group, New Delhi\nProject- Greater Noida",
        "startDate": "19-01-2016",
        "endDate": "28-05-2017",
        "status": "Completed"
    },
    {
        "name": "M/s National Building Construction Corporation Ltd.\nProject- NBCC Green View, Gurgaon",
        "startDate": "21-05-2016",
        "endDate": "15-07-2017",
        "status": "Completed"
    },
    {
        "name": "Ajay Enterprises Pvt. Ltd EROS Group, New Delhi\nProject- Greater Noida",
        "startDate": "06-10-2016",
        "endDate": "10-06-2017",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer Barrakpore, Military Engineer Service (MES), Kalkatta.\nProject- Kanchrapara",
        "startDate": "14-12-2018",
        "endDate": "17-03-2020",
        "status": "Completed"
    },
    {
        "name": "Commander Works Engineer MES, Kolkata,\nProject – Manicktala",
        "startDate": "03-01-2019",
        "endDate": "09-12-2021",
        "status": "Completed"
    },
    {
        "name": "Commander Works Engineer MES, Delhi Cantt.110010.\nProject – COAST GUARD , NOIDA",
        "startDate": "21-05-2022",
        "endDate": "26-10-2022",
        "status": "Completed"
    },
    {
        "name": "SCOPE,\nSCOPE Complex, Core-8. First Floor, Lodhi Road, New Delhi.\nReplacement of 3x750 KVA Dry Type Transformers for Sub-station No.III at SCOPE Complex, 7-Lodhi Road, New Delhi-110003",
        "startDate": "20-09-2018",
        "endDate": "13-04-2019",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer Barrakpore, Military Engineer Service (MES), Kolkata.\nProvn of Electric Supply for Barrack pore, Kanchrapara, Salt Lake, Dakshineshwar and Kankinara under CWE (S) Barrackpore.",
        "startDate": "14-12-2018",
        "endDate": "17-03-2020",
        "status": "Completed"
    },
    {
        "name": "Commander Works Engineer MES, Kolkata\nProvision of External Services for MD ACCN at Manicktala Kolkata",
        "startDate": "03-01-2019",
        "endDate": "09-12-2021",
        "status": "Completed"
    },
    {
        "name": "Commander Works Engineer MES, Delhi Cantt.110010.\nProvn of DG set for ICG at Sector-62 Noida under AGE (I) Coast Guard Noida",
        "startDate": "21-05-2022",
        "endDate": "20-10-2022",
        "status": "Completed"
    },
    {
        "name": "HQ CE (AF) WAC\nPalam, Military Engineer services, Delhi Cantt- 10\nProvn of Mafi Power Station and\nAssociated Power Ancillaries at AF Sarsawa",
        "startDate": "01-12-2022",
        "endDate": "29-02-2024",
        "status": "Completed"
    },
    {
        "name": "Commander Works Engineer Military Engineering  Services Sri Ganganagar-335001.\nUpgradation of HT Eqpt in Main Elect Receiving station under GE Sri Ganganagar at Sri Ganganagar Military Station",
        "startDate": "25-10-2022",
        "endDate": "26-04-2023",
        "status": "Completed"
    },
    {
        "name": "Chief Engineer (Coast Guard)Military Engineer Services Chicolna JNC Nagar Road Bogmalo – Post, GOA 403806\nVoltage Stablizer, Retrofitting of Emission Control Devices (RECD) etc. Under AGE (I) CG Noida",
        "startDate": "31-07-2023",
        "endDate": "01-04-2023",
        "status": "Completed"
    },
    {
        "name": "India Bulls Construction Ltd.\nProject- Mega Mall Jodhpur Fire Fighting & Plumbing",
        "startDate": "14-09-2015",
        "endDate": "21-12-2023",
        "status": "Completed"
    },
    {
        "name": "Chief Engineer\nHQ Chief Engineer Bareilly Zone Military Engineers Services Sarvatra Bhawan, Station Road, Bareilly Cantt , Bareilly – 243001\nGarrison Engineer (U) E/M, Military Engineer Services,\nRoorkee Road, Meerut Cantt – 250001.",
        "startDate": "29-05-2023",
        "endDate": "21-09-2024",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer (I) (CG) Military Engineer Services CGRA Meenambakkam Building No. P-16,\nNGO Colony, 4th Street, Nanganallur, Chennai- 600061. Provision of Retrofit emission control device for DG Sets at Tuticorin area\nunder GE (I) (CG) Chennai",
        "startDate": "29-02-2024",
        "endDate": "28-07-2024",
        "status": "Completed"
    },
    {
        "name": "Garrison Engineer (l) Kanpur Military Engineer Services Cariappa Road, Kanpur Cantt-04\nProvision of retrofit Emmision Control Device on existing DG sets at COD inside & Cantt area under GE (I)\nKanpur.",
        "startDate": "16-03-2024",
        "endDate": "16-07-2024",
        "status": "Completed"
    },
    {
        "name": "Ajay Enterprises Pvt. Ltd EROS Group, New Delhi\nProject- EROS Samoornam Greater Noida",
        "startDate": "16-08-2021",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "HQ Chief Engineer Bhopal Zone Military Engineer Services, Sultania Infantry Lines,\nBhopal – 462011\nProject : Bairagarh Cantt., Bhopal",
        "startDate": "08-10-2022",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "Ajay Enterprises Pvt. Ltd EROS Group, New Delhi\nProject- EROS Samoornam (Stilt Floor) Greater Noida",
        "startDate": "17-10-2022",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "HQ Chief Engineer Bhopal Zone Military Engineer Services, Sultania Infantry Lines, Bhopal – 462011\nProject : Bairagarh Cantt., Bhopal",
        "startDate": "06-01-2023",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "Ajay Enterprises Pvt. Ltd EROS Group, New Delhi\nProject- EROS Samoornam (Stilt Floor)                   Greater Noida",
        "startDate": "17-10-2022",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "Ajay Enterprises Pvt. Ltd EROS Group, New Delhi Project- EROS Samoornam\n(External  Lighting)  Greater Noida",
        "startDate": "30-01-2024",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "Commander Works Engineer (AF) Bagdogra\nHQ Commander Works Engineer (AF) Post- Bagdogra Airport,\nDistt-Darjeeling (W.B) Pin Code- 734421.\nConversion of OH/HT Cable to UG/HT  Cables and PROVN of Ring  main  system at  AF  STN\nBAGDOGRA",
        "startDate": "15-11-2024",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "Commander Works Engineers (AF) HQ Commander Works Engineers (AF)\nMilitary Engineer Services Agra (UP) Pin - 282008\nSpecial   Repair/replacement   to   Power Transformer   against   BER   under   GE (AF) Adm area at af Stn Agra",
        "startDate": "02-12-2024",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "Commander Works Engineer (AF) HQ Commander Works Engineer (AF)\nMilitary Engineer Services\nAir Force Station, Chakeri, Kanpur– 208008\nProvn of Deficient Transformer at AF STN Kanpur",
        "startDate": "07-12-2024",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "Chief Engineer\nHQ Chief Engineer Bareilly Zone Military Engineers Services Sarvatra Bhawan, Station Road, Bareilly Cantt , Bareilly – 243001\nTransformers AT Shivaji Line and Bhagat Lines MRS Under GE (Utility)\nMeerut Cantt.",
        "startDate": "02-01-2025",
        "status": "Ongoing",
        "endDate": ""
    },
    {
        "name": "Chief Engineer\nHQ Chief Engineer Bareilly Zone Military Engineers Services Sarvatra Bhawan, Station Road, Bareilly Cantt , Bareilly – 243001\nAugmentation of Rajesh Enclave, 522 ASC BN and 32 BDE HT Feeder for Ring Main system under GE (U) E/M Meerut Cantt",
        "startDate": "08-01-2025",
        "status": "Ongoing",
        "endDate": ""
    }
];

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        
      <div className="projects-container">
        {/* Slideshow Section */}
        <h2 className="slideshow-heading">Completion Certificate</h2>
        <div className="slideshow-container">
          <img
            src={projectImages[currentImageIndex]}
            alt="Project"
            className="slideshow-image"
          />
          
        </div>
  
        {/* Projects Table */}
        <h2 className="projects-heading"> Projects List</h2>
        <table className="projects-table">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Projects;