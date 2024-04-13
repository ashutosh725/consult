"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const listItem = [
  {
    title: 'ASSAM',
    category: 'ASSAM',
    des: [
      {
        p: `Guwahati Medical College, Guwahati`
      },
      {
        p: `Silchar Medical College, Silchar`
      },
      {
        p: `Assam Medical College, Dibrugarh`
      },
    ]
 },
 {
  title: 'ANDHRA PRADESH',
  category: 'ANDHRA',
  des: [
    {
      p: `Andhra Medical College, Visakhapatnam`
    },
    {
      p: `Rangaraya Medical College, Kakinada`
    },
    {
      p: `Guntur Medical College, Guntur`
    },
    {
      p: `Siddhartha Medical College, Vijayawada`
    },
    {
      p: `Osmania Medical College, Hyderabad`
    },
    {
      p: `Gandhi Medical College, Hyderabad`
    },
    {
      p: `Kakatiya Medical College, Warangal`
    },
    {
      p: `Kurnool Medical College, Kurnool`
    },
    {
      p: `S.V.Medical College, Tirupati`
    },
    {
      p: `Deccan College of Medical Sciences, Hyderabad`
    },
    {
      p: `Mamta Medical College, Khammam`
    },
    {
      p: `Kamineni Institute of Medical Sciences, Narketpalli,
      Nalgonda`
    },
    {
      p: `S.V.S. Medical College, Mehboobnagar`
    },
    {
      p: `Narayana Medical College, Nellore`
    },
    {
      p: `Govt. Medical College, Anatapur`
    },
    {
      p: `ASRAM Medical College, Eluru`
    },
    {
      p: `MNR Medical College, Sangareddy, Distt: Medak`
    },
    {
      p: `Prathima Institute of Medical Sciecnes, Nagunur,
      Karimnagar Distt`
    },
    {
      p: `PES Institute of`
    },
    {
      p: `Medical Sciences & Research, Kuppam, Chittor District`
    },
    {
      p: `Medicity Institute of Medical Sciences, Ghanpur, Ranga Reddy District`
    },
    {
      p: `Katuri Medical College, Guntur`
    },
    {
      p: `PES Institute of`
    },
    {
      p: `Christian Medical College, Dichipally`
    },
    {
      p: `Dr. Pinnamaneni Siddhartha Institute of Medical Sciences & Research Foundation,Chinoutpally.`
    },
    {
      p: `GSL Medical College, Rajahmundry`
    },
    {
      p: `Maharaja’s Institute of Medical Scineces, Nellimarla,
      Vizianagaram`
    },
    {
      p: `NRI Medical College, Chinnakakani`
    },
    {
      p: `Chelmada Anand Rao Instt. Of Medical Sciences,
      Karimnagar`
    },
    {
      p: `Shadan Instt. of Medical Sciences, Peeranchru`
    },
    {
      p: `Bhaskar Medical College, Yenkapally`
    },
    {
      p: `Konaseema Instt. Of`
    },
    {
      p: `Medical Sciences and Research, Amalapuram`
    },
    {
      p: `Santhiram Medical College, Nandiyal`
    },
    {
      p: `Rajiv Gandhi Instt. of Medical Sciences, Kadappa, A.P.`
    },
    {
      p: `Rajiv  Gandhi Institute of Medical Sciences,
      Srikakulam, A.P.`
    },
    {
      p: `Rajiv Gandhi Institute of Medical Sciences, Adilabad,
      A.P.`
    },
   
  ]
},
{
  title: 'CHANDIGARH',
  category: 'CHANDIGARH',
  des: [
    {
      p: `Govt. Medical College, Chandigarh`
    }
    
  ]
},
{
  title: 'CHATTISGARH',
  category: 'CHATTISGARH',
  des: [
    {
      p: `Pt. J.N.M. Medical
      College, Raipur`
    },
    {
      p: `Chattisgarh Institute
      of Medical Sciences, Bilaspur`
    },
    {
      p: `Govt. Medical College, NMDC, Jagdalpur`
    },
    
  ]
},
{
  title: 'BIHAR',
  category: 'BIHAR',
  des: [
    {
      p: `Darbhanga Medical College, Laheriasarae`
    },
    {
      p: `Sree Krishna Medical College, Muzaffarpur`
    },
    {
      p: `Patna Medical
      College, Patna`
    },
    {
      p: `Jawaharlal Nehru Medical College, Bhagalpur`
    },
    {
      p: `A.N. Magadh
      Medical College, Gaya`
    },
    {
      p: `Nalanda Medical College, Patna`
    },
    {
      p: `Katihar Medical College, Katihar`
    },
    {
      p: `Mata Gujri Medical College, Kishanganj`
    },
    {
      p: `Narayan Medical College & Hospital,
      Rohtas, Bihar.`
    },
    
    
  ]
},
{
  title: 'GOA',
  category: 'GOA',
  des: [
    {
      p: `Goa Medical
      College, Panaji`
    },
    
    
  ]
},
{
  title: 'GUJARAT',
  category: 'GUJARAT',
  des: [
    {
      p: `B.J. Medical College, Ahmedabad`
    },
    {
      p: `Municipal Medical
      College, Ahmedabad`
    },
    {
      p: `Medical College, Baroda`
    },
    {
      p: `M.P. Shah Medical
      College, Jamnagar`
    },
    {
      p: `Govt. Medical College, Rajkot`
    },
    {
      p: `Govt. Medical
      College, Surat`
    },
    {
      p: `Pramukh Swamy
      Medical College, Karamsad`
    },
    {
      p: `Govt. Medical
      College, Bhavnagar`
    },
    {
      p: `C.U. Shah Medical College,
      Surendranagar`
    },
    {
      p: `Surat Municipal Institute of Medical Education and Research, Surat,
      Gujarat`
    },
    {
      p: `Smt. Bhikhiben Kanjibhai Shah Medical Institute &
      Research Centre, Piparia`
    },
    {
      p: `Swami Vivekanand`
    },
    {
      p: `Institute of Medical Sciences and Research, Valia, Distt. Bharuch`
    },
    {
      p: `Kesar Sal Medical College, Ahmedabad`
    },
    {
      p: `Gujarat Adani Institute of Medical Sciences G.K. General Hospital,
      Bhuj, Gujarat`
    },
    {
      p: `K.J. Mehta General Hospital & College of Medical Sciences, Amargarh,
      Bhavnagar, Gujarat`
    },
    {
      p: `Ahmedabad Municipal Corporation Medical Education Trust Medical College, Ahmedabad, Gujarat`
    },
    

    
    
  ]
},
{
  title: 'DELHI',
  category: 'DELHI',
  des: [
    {
      p: `All India Institute of Medical Sciences,
      New Delhi`
    },
    {
      p: `Lady Hardinge Medical College,
      New Delhi`
    },
    {
      p: `Maulana Azad
      Medical College, New Delhi`
    },
    {
      p: `University College of Medical Sciences,
      Delhi`
    },
    {
      p: `Vardhman Mahavir
      Medical College,`
    },
    {
      p: `Safdarjung Hospital, New Delhi`
    },
    {
      p: `Army College of Medical Sciences, New Delhi`
    },
  ]
},
{
  title: 'HIMACHAL PRADESH',
  category: 'HIMACHAL',
  des: [
    {
      p: `Indira Gandhi Medical College,
      Shimla`
    },
    {
      p: `Dr. Rajendra Prasad`
    },
    {
      p: `Govt. Medical College, Tanda`
    },
  ]
},
{
  title: 'JAMMU & KASHMIR',
  category: 'JAMMU',
  des: [
    {
      p: `Govt. Medical College, Srinagar`
    },
    {
      p: `Govt Medical College, Jammu`
    },
    {
      p: `Acharya Shri Chander College of Medical Sciences &
      Hospital, Jammu`
    },
    {
      p: `SKIMS, Srinagar`
    },
  ]
},
{
  title: 'ORISSA',
  category: 'ORISSA',
  des: [
    {
      p: `SCB Medical College, Cuttack`
    },
    {
      p: `MKCG Medical
      College, Berhampur`
    },
    {
      p: `VSS Medical
      College, Burla`
    },
    {
      p: `Hi-Tech Medical College, Bhubaneshwar`
    },
    {
      p: `Kalinga Institute of Medical Sciences, Bhubaneswar`
    },
    {
      p: `Institute of Medical Sciences and SUM
      Hospital, Bhubaneswar`
    },
  ]
},
{
  title: 'HARYANA',
  category: 'HARYANA',
  des: [
    {
      p: `Pd. Bhagwan Dayal Sharma Postgraduate Institute of Medical Sciences, Rohtak`
    },
    {
      p: `Maharaja Agrasen Medical College,
      Agroha`
    },
    {
      p: `Maharishi Markhandeshwar Instt. Of Medical Sciences and Research, Mullana Ambala`
    },
   
  ]
},
{
  title: 'KARNATAKA',
  category: 'KARNATAKA',
  des: [
    {
      p: `Kasturba Medical College, Manipal`
    },
    {
      p: `Kasturba Medical
      College, Mangalore`
    },
    {
      p: `Bangalore Medical`
    },
    {
      p: `College, Bangalore`
    },
    {
      p: `St.John’s Medical`
    },
    {
      p: `M.S. Ramaiah`
    },
    {
      p: `Medical College,`
    },
    {
      p: `Bangalore`
    },
    {
      p: `Kempegowda Institute of Medical Sciences, Bangalore`
    },
    {
      p: `Siddhartha Medical College, Tumkur`
    },
    {
      p: `Sre Devraj Urs`
    },
    {
      p: `Medical College, Tamka Kolar`
    },
    {
      p: `Mysore Medical College, Mysore`
    },
    {
      p: `JSS Medical College, Mysore`
    },
    {
      p: `Adichunchanagiri Institute of Medical Sciences, Bellur`
    },
    {
      p: `JJM Medical College, Davangere`
    },
    {
      p: `Karnataka Institute of Medical Sciences, Hubli`
    },
    {
      p: `JN Medical College, Belgaum`
    },
    {
      p: `B.L. D.E.A’s Sre
      B.M. Patil Medical College Hospital Research Centre, Bijapur`
    },
    {
      p: `Al-Ameen Medical College, Bijapur`
    },
    {
      p: `M.R. Medical
      College, Gulbarga`
    },
    {
      p: `Vijaynagar Institute of Medical Sciences, Bellary`
    },
    {
      p: `Fr. Muller’s Medical College, Mangalore`
    },
    {
      p: `K.S. Hegde Medical Academy, Mangalore`
    },
    {
      p: `Yenepoya Medical College and Hospital, Chitradurga`
    },{
      p: `Khaja Banda Nawaz Institute of Medical Hospital, Gulbarga`
    },
    {
      p: `Basaveswara Medical College and Hospital, Chitradurga`
    },
    {
      p: `MVJ Medical College & Research Hospital, Bangalore`
    },
    {
      p: `KVJ Medical College, Sullia`
    },
    {
      p: `Vydehi Instt. of
      Medical Sciences & Research Center,`
    },
    {
      p: `Nallurahalli`
    },
    {
      p: `A.J. Institute of Medical Sciences, Mangalore`
    },
    {
      p: `S. Nijalingappa Medical College,Bagalkot`
    },
    {
      p: `Navodaya Medical College, Raichur`
    },
    {
      p: `SDM Medical College, Dharwad, Karnataka`
    },
    {
      p: `Raja Rajeshwari Medical College & Hospital, Bangalore`
    },

    {
      p: `S.S. Instt. of Medical Sciences & Research, Davangere`
    },
    {
      p: `Belgaum Instt. of Medical Sciences, Belgaum`
    },
    {
      p: `Mandya Instt. of Medical Sciences, Mandya`
    },
    {
      p: `Hassan Instt. of Medical Sciences, Hassan`
    },
    {
      p: `Shimoga Institute of Medical Sciences, Shimoga, KA`
    },
    {
      p: `Raichur Institute of Medical Sciences, Raichur, KA`
    },
    {
      p: `Bidar Institute of Medical Sciences, Bidar, KA`
    },

   
  ]
},
{
  title: 'KERALA',
  category: 'KERALA',
  des: [
    {
      p: `Medical College,
      Trivandrum`
    },
    {
      p: `T.D. Medical College, Alappuzha`
    },

    {
      p: `Medical College,
      Kottayam`
    },
    {
      p: `Medical College, Calicut`
    },


    {
      p: `Medical College,
      Trissur`
    },
    {
      p: `Academy of Medical Sciences, Pariyaram, Kannur`
    },
    {
      p: `Co-operative Medical
      College, Kochi`
    },
    {
      p: `Amrita Institute of Medical Sciences &
      Research Centre, Kochi`
    },
    {
      p: `Pushpagiri Instt. of Medical Sciences &
      Research Centre, Tiruvalla`
    },
    {
      p: `Malankara Orthodox
      Syrian Church Medical Mission,`
    },
    {
      p: `Kolencherry`
    },
    {
      p: `Dr. Somervel Memorial CSI Hospital & Medical College, Karakonam,`
    },
    {
      p: `Thiruvananthapuram`
    }, {
      p: `Amala Institute of Medical Sciences, Trissur`
    },

    {
      p: `MES Medical College, Malaparamba, Malappuram District`
    },
    {
      p: `Sree Gokulam
      Medical College, Trivendrum`
    },
    {
      p: `Kanoor Medical College, Kanoor`
    },
    {
      p: `SUT Academy of
      Medical Sciences, Trivendarum`
    },

    {
      p: `Karuna Medical College, Palakkad`
    },
    {
      p: `KMCT Medical College, Kozhikode,
      Kerala`
    },
    {
      p: `Azeezia Institute of Medical Sciences and Research, Kollam,
      Kerala`
    },
    {
      p: `
      Sree Narayana Institute of Medical Sciences, Ernakulam, Kerala`
    },
    {
      p: `Travancore Medical
      College, Kollam, Kerala`
    },

   
  ]
},
{
  title: 'JHARKHAND',
  category: 'JHARKHAND',
  des: [
    {
      p: `Rajendra Medical College, Ranchi`
    },
    {
      p: `MGM Medical
      College, Jamshedpur`
    },
    {
      p: `Patliputra Medical College, Dhanbad`
    },
  ]
},
{
  title: 'MAHARASHTRA',
  category: 'MAHARASHTRA',
  des: [
    {
      p: `Grant Medical
      College, Mumbai`
    },
    {
      p: `Seth GS Medical
      College, Mumbai`
    },
    {
      p: `TN Medical
      College, Mumbai`
    },
    {
      p: `LTM Medical
      College, Mumbai`
    },
    {
      p: `Padmashree Dr.
      D.Y. Patil Medical College, New Mumbai`
    },
    {
      p: `Mahatma Gandhi Mission’s Medical College, New Mumbai`
    },
    {
      p: `KJ Somaiyya Medical College and Research Centre, Sion,
      Mumbai`
    },
    {
      p: `Rajiv Gandhi Medical College and Chhtrapati Shivaji Maharaj
      Hospital, Thane`
    },
    {
      p: `Terna Medical
      College, Terna, Navi Mumbai`
    },
    {
      p: `BJ Medical College,
      Pune`
    },
    {
      p: `Armed Forece Medical College, Pune`
    },
    {
      p: `Rural Medical
      College, Loni`
    },
    {
      p: `NDMVP Samaj’s Medical College,
      Nasik`
    },
    {
      p: `Bharati Vidyapeeth’s
      Medical College, Pune`
    },
    {
      p: `Sre Bhausaheb Hire Govt Medical College, Dhule`
    },
    {
      p: `Jawahar Medical Foundation’s ACPI
      Medical College, Dhule`
    },
    {
      p: `Miraj Medical College, Miraj`
    },
    {
      p: `Dr.VM Medical College, Solapur`
    },
    {
      p: `Kirshna Institute of Medical Sciences, Karad`
    },
    {
      p: `D.Y. Patil Education Society’s
      D.Y. Patil Medical College, Kolahpur`
    },
    {
      p: `Govt Medical College, Auranbagad`
    },
    {
      p: `SRTR Medical College, Ambajogai`
    },
    {
      p: `Mahatma Gandhi Mission’s Medical College,
      Aurangabad`
    },
    {
      p: `Govt Medical College, Nanded`
    },
    {
      p: `Maharashtra Institute of Medical Sciences & Research, Latur`
    },
    {
      p: `Govt Medical
      College, Nagpur`
    },
    {
      p: `Indira Gandhi
      Medical College, Nagpur`
    },
    {
      p: `Mahatma Gandhi Institute of Medical
      Sciences, Sevagram, Wardha`
    },
    {
      p: `JN Medical College,
      Swangi, Wardha`
    },
    {
      p: `NKP Salve Institute`
    },

    {
      p: `of Medical Sciences, Nagpur`
    },
    {
      p: `Dr. Panjabrao Alias Bhausahe’s Deshmukh Memorial Medical College, Amrawati`
    },
    {
      p: `Shree Vasantrao Naik Govt Medical
      College, Yavatmal`
    },
    {
      p: `Maharashtra Institute of Medical Education & Research, Talegaon,
      Dabhade, Pune`
    },
    {
      p: `Dr. D.Y. Patil Pratishthan’s Medical College for
      Women, Pimpri, Pune`
    },
    {
      p: `Govt Medical College, Kolhapur`
    },
    {
      p: `Govt. Medical College, Latur`
    },
    {
      p: `Govt. Medical College, Akola`
    },
    {
      p: `Dr. Vithalrao Vikhe Patil Foundation’s
      Medical College, Ahmednagar`
    },

    {
      p: `Bharati Vidyapeeth Deemd University Medical College,
      Sangli`
    },
    {
      p: `Smt. Kashibai Nalave Medical
      College and General Hospital, Pune`
    },
    {
      p: `Dr. Ulhas Patil Medical College and Hospital, Jalgaon`
    },
    


    
  ]
},
{
  title: 'MADHYA PRADESH',
  category: 'MADHYA',
  des: [
    {
      p: `Netaji Subhash Chandra Bose Medical College, Jabalpur`
    },

    {
      p: `GR Medical College, Gwalior`
    },
    {
      p: `MGM Medical College, Indore`
    },
    {
      p: `Gandhi Medical College, Bhopal`
    },
    {
      p: `S.S. Medical
      College, Rewa`
    },
    {
      p: `RD Gardhi Medical
      College, Ujjain`
    },
    {
      p: `Aurobindo Institute of Medical Science, Indore`
    },
    {
      p: `People’s College of Medical Sciences & Research Centre, Bhopal`
    },
    {
      p: `Index Medical College, Hospital & Research Centre,
      Indore, M.P.`
    },

    {
      p: `L.N. Medical College & Research Centre, Bhopal,
      Madhya Pradesh`
    },
    {
      p: `Sagar Government Medical College,
      Sagar, Madhya Pradesh`
    },
    
  ]
},
{
  title: 'MANIPUR',
  category: 'MANIPUR',
  des: [
    {
      p: `Regional Institute of
      Medical Sciences, Imphal`
    },
   
  ]
},
{
  title: 'PONDICHERRY',
  category: 'PONDICHERRY',
  des: [
    {
      p: `Jawaharlal Institute of Postgraduate Medical Education & Research,
      Pondicherry`
    },

    {
      p: `Vinayak Mission’s Medical College, Karaikal,
      Pondicherry`
    },
    {
      p: `Aarupadai Veedu Medical College, Pondicherry`
    },
    {
      p: `Mahatma Gandhi
      Medical College, Pondicherry`
    },
    {
      p: `Pondicherry Institute of Medical Sciences, Pondicherry`
    },
    {
      p: `Sri Manakula Vinayagar Medical College, Pondicherry`
    },
    {
      p: `Laxmi Narayan Instt. of Medical
      Sciences, Pondicherry`
    },
    {
      p: `Sri Venkateshwara Medical College & Research Centre, Pondicherry`
    },

    
   
  ]
},
{
  title: 'TAMIL NADU',
  category: 'TAMIL',
  des: [
    {
      p: `Chennai Medical College, Chennai`
    },
    {
      p: `Stanley Medical College, Chennai`
    },
    {
      p: `Kilpauk Medical College, Chennai`
    },
    {
      p: `Christian Medical College, Vellore`
    },

    {
      p: `Chengalpattu Medical College, Chengalpattu`
    },
    {
      p: `Tanjavur Medical College, Thanjavur`
    },
    {
      p: `Coimbatore Medical College, Coimbatore`
    },
    {
      p: `Tirunelveli Medical College, Tiurunelvei`
    },
    {
      p: `Madurai Medical College, Madurai`
    },
    {
      p: `Mohan Kumaramangalam Medical College,
      Selam`
    },
    {
      p: `PSG Institute of Medical Sciences, Coimbatore`
    },
    {
      p: `Perunthurai Medical`
    },
    {
      p: `College, Perunthurai`
    },
    {
      p: `Vinayaka Mission’s Medical College, Salem`
    },
    {
      p: `Sre Ramachandra Medical College & Research Institute,
      Porur, Madras`
    },
    {
      p: `Rajah Muthiah Medical College,
      Annamalainagar`
    },
    {
      p: `KAP Vishwanathan Govt. Medical College, Trichy`
    },
    {
      p: `Govt. Medical College, Toothukudi`
    },
    {
      p: `Meenakshi Medical College & Research Institute, Enathur`
    },
    {
      p: `Sree Balaji Medical College & Hospital, Chennai`
    },
    {
      p: `Govt.  Medical College, Asaripallam`
    },
    {
      p: `S.R.M. Medical College & Research Center, Chennai`
    },
    {
      p: `Govt.  Vellore Medical College,
      Vellore`
    },
    {
      p: `Chettinad Hospital`
    },
    {
      p: `and Research Instt., Chennai`
    },
    {
      p: `Sri Mokambika Instt.
      of Medical Sciences, Kulaseharan,`
    },
    {
      p: `Govt. Medical College, Theni`
    },
    {
      p: `Saveetha Medical College, Thandalam,
      Tamil Nadu`
    },
    {
      p: `Government Dharmapuri Medical College, Dharmapuri, Tamil Nadu`
    },
    {
      p: `ACS Medical College & Hospital, Chennai`
    },
    {
      p: `Melmaruvathur Adhiparasakthi Institute of Medical Sciences & Research`
    },
    {
      p: `Shri Satya Sai Medical College and Research Institute, Nellikuppam`
    },

    {
      p: `Chennai Medical
      College & Hospital, Trichurapalli, T.N.`
    },
    {
      p: `Karpaga Vinayaga Institute of Medical Sciences & Research Centre,`
    },
    {
      p: `Kanchipuram, Tamil Nadu`
    },


   
  ]
},
{
  title: 'PUNJAB',
  category: 'PUNJAB',
  des: [
    {
      p: `Govt Medical College, Patiala`
    },
    {
      p: `Guru Govind Singh Medical College, Faridkot`
    },
    {
      p: `Christian Medical College, Ludhiana`
    },
    {
      p: `Dayanand Medical College, Ludhiana`
    },
    {
      p: `Govt Medical College, Amritsar`
    },
    {
      p: `Sree Guru Ram Das Institute of Medical Sciences and Research, Sri
      Amritsar`
    },
    {
      p: `Adesh Instt. of Medical Sciences, Bhatinda`
    },
    {
      p: `Gian Sagar Medical College & Hospital, Patiala`
    },
   
  ]
},
{
  title: 'RAJASTHAN',
  category: 'RAJASTHAN',
  des: [
    {
      p: `SMS Medical College, Jaipur`
    },
    {
      p: `SP Medical College,
      Bikaner`
    },
    {
      p: `RNT Medical College, Udaipur`
    },
    {
      p: `Dr. SN Medical
      College, Jodhpur`
    },
    {
      p: `JLN Medical
      College, Ajmer`
    },
    {
      p: `Govt Medical College, Kota`
    },

    {
      p: `National Institute of Medical Sciences, Jaipur`
    },
    {
      p: `Jhalawar Medical College, Jhalawar, Rajasthan`
    },
    {
      p: `Geetanjali Medical College and Hospital, Udaipur`
    },
  ]
},
{
  title: 'UTTAR PRADESH',
  category: 'UTTAR',
  des: [
    {
      p: `SN Medical College, Agra`
    },
    {
      p: `MLN Medical College, Allahabad`
    },
    {
      p: `JN Medical College, Aligarh`
    },
    {
      p: `Institute of Medical Sciences, BHU, Varanasi`
    },
    {
      p: `GSVM Medical College, Kanpur`
    },
    {
      p: `MLB Medical
      College, Jhansi`
    },
    {
      p: `KG’s Medical College, Lucknow`
    },
    {
      p: `LLR Medical College, Meerut`
    },
    {
      p: `BRA Medical
      College, Gorakhpur`
    },
    {
      p: `Santosh Medical College, Ghaziabad`
    },
    {
      p: `Subharati Medical College, Meerut`
    },
    {
      p: `Era,s Lucknow
      Medical College, Lucknow`
    },
    {
      p: `Sri Ram Murti Smarak Instt. of
      Medical Sciences, Bareilly`
    },

    {
      p: `Rural Instt. of Medical Sciences &
      Research, Saifai, Etawah`
    },
    {
      p: `Rohilkhand Medical
      College & Hospital, Bareilly`
    },

    {
      p: `Muzaffarnagar Medical College, Muzaffarnagar`
    },{
      p: `Teerthanker Mahaveer Medical College & Research Centre, Moradabad, Uttar Pradesh`
    },

    {
      p: `Saraswathi Institute of Medical Sciences, Anwarpur, Uttar
      Pradesh`
    },


    {
      p: `Rama Medical College, Hospital & Research Centre,
      Kanpur`
    },
    {
      p: `Hind Institute of Medical Sciences, Barabanki, U.P.`
    },
    {
      p: `Hindustan Institute of Medical Sciences & Research, Gr. Noida,
      U.P.`
    },
   
  ]
},
{
  title: 'SIKKIM',
  category: 'SIKKIM',
  des: [
    {
      p: `New Medical College at Gangtok
      by Sikkim-Manipal University`
    },
    
  ]
},
{
  title: 'TRIPURA',
  category: 'TRIPURA',
  des: [
    {
      p: `Agartala Govt. Medical College,
      Tripura`
    },
    {
      p: `Tripura Medical College and Dr. BRAM Hospital, Agartala`
    },
    
  ]
},
{
  title: 'UTTARANCHAL',
  category: 'UTTARANCHAL',
  des: [
    {
      p: `Hiamalaya Institute of Medical Sciences, Dehradun`
    },
    {
      p: `Uttranchal Forest
      Trust Hospital Trust, Haldwani`
    },
    {
      p: `Guru Ram Rai Instt. of Medical Sciences,
      Dehradun`
    },
    {
      p: `Veer Chander Singh Garwali Government Medical Sciences &
      Research Institute, Srinagar, Uttarakhand`
    },
    
  ]
},
{
  title: 'WEST BENGAL',
  category: 'WEST',
  des: [
    {
      p: `Medical College, Calcutta`
    },
    {
      p: `RG Kao Medical
      College, Calcutta`
    },
    {
      p: `NRS Medical
      College, Calcutta`
    },
    {
      p: `Calcutta National Medical College,
      Calcutta`
    },
    {
      p: `BS Medical College, Bankura`
    },
    {
      p: `North Bengal Medical College, Darjeeling`
    },
    {
      p: `Burdwan Medical College, Burdwan`
    },
    {
      p: `Govt. Medical
      College, Midnapore`
    },
    {
      p: `Institute of Postgraduate Medical Education & Research,
      Kolkata`
    },
    {
      p: `KPC Medical College & Hospital Society, Kolkata`
    },
    
  ]
},
]

const Indiaa = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const router = useRouter();
  const handlebtn12 = ()=>{
    router.push('/contact')
  }
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className={`bg-[url('/Untitled-design-27.png')]  bg-cover bg-center py-20`}>
      <div className='container mx-auto'>
<div className='flex flex-col justify-center items-center gap-3'>
<h3 className='lg:text-[60px] text-[#333333]  text-[30px] font-bold'>MBBS in India</h3>
<button onClick={handlebtn12} className='bg-black text-white text-[16px] rounded-full px-6 py-3'>{`Yes, I Want to Admission !`}</button>
</div>
<div className='bg-white rounded-lg mt-8'>
      <div className='flex bg-gray-100 flex-wrap justify-start items-center'>
        {listItem.map((item, index) => (
          <button
            key={index}
            className={`px-7 py-2 text-[16px] border-r border-r-white font-bold text-white ${activeCategory === item.category ? 'bg-black' : 'bg-[#2e987d]'}`}
            onClick={() => handleCategoryClick(item.category)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='flex flex-col p-6'>
        {listItem.map((item, index) => (
          <div key={index} className={activeCategory === item.category ? 'block' : 'hidden'}>
            {item.des.map((desc, i) => (
              <div key={i} className='border p-4'>
                <p>{desc.p}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  )
}

export default Indiaa
