# Electronic-Health-Record-Management-System
- This is a blockchain-based
electronic health record (EHR) management
system that utilizes the Ethereum blockchain
and InterPlanetary File System (IPFS) for
secure and decentralized storage of medical
records. The system provides patients with
the ability to upload their medical records on
IPFS and share them with the doctors they
choose.We have used React.js to build a
user-friendly front-end interface that allows
patients to upload their medical records on
IPFS. Web3.storage is used as the interface
to upload data to IPFS, and MetaMask is
used as the digital wallet to enable users to
interact with the Ethereum blockchain.We
have designed a smart contract that governs
access to medical records and ensures that
only authorized parties can view them. The
smart contract is deployed on the Ethereum
blockchain, and we have used Hardhat to 
test and deploy the contract on the Rinkeby
test network.

# This project has several advantages over traditional EHR systems -  
- The use of
blockchain and IPFS provides patients with
complete control over their medical records,
and the decentralized storage ensures that
the records are tamper-proof and cannot be
altered.
- The smart contract governing access
to the records ensures that only authorized
parties can view them, providing patients
with complete control over who has access
to their medical information.
- In addition to
these benefits, our project is highly scalable
and can be easily adapted to meet the needs
of different healthcare providers.
- The use of
blockchain technology ensures that the
system is secure and transparent, providing
patients with complete confidence in the
integrity of their medical records

#workflow

EHR
├── Structs
│   ├── User
│   │   ├── name (string)
│   │   └── friendList (Friend[])
│   ├── Friend
│   │   ├── pub_key (address)
│   │   └── name (string)
│   ├── Message
│   │   ├── sender (address)
│   │   ├── timestamp (uint256)
│   │   └── msg (string)
│   └── AllUserStruct
│       ├── name (string)
│       └── accountAddress (address)
├── State Variables
│   ├── getAllUsers (AllUserStruct[])
│   ├── userList (mapping(address => User))
│   └── allMsges (mapping(bytes32 => Message[]))
├── Functions
│   ├── checkUserExists(address)
│   │   └── returns (bool)
│   ├── createAccount(string calldata)
│   ├── getUserName(address)
│   │   └── returns (string memory)
│   ├── addFriend(address, string calldata)
│   ├── checkAlreadyFrnd(address, address)
│   │   └── returns (bool)
│   ├── _addFriend(address, address, string memory)
│   ├── getMyFriendList()
│   │   └── returns (Friend[] memory)
│   ├── _getChatCode(address, address)
│   │   └── returns (bytes32)
│   ├── sendMessage(address, string calldata)
│   ├── readMessage(address)
│   │   └── returns (Message[] memory)
│   └── getAllAppUser()
│       └── returns (AllUserStruct[] memory)
└── Events
    ├── AccountCreated(address indexed, string)
    └── FriendAdded(address indexed, address indexed, string)

# Tech Stack :
- Solidity
- Hardhat
- React-js
- Ether-js
- IPFS
- Web3Modal
- MetaMask
- Goerli TestNet
# Screenshots
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/66615eb9-26da-4c3b-95f0-153c43f29adc)
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/37661896-5567-4890-a2e3-c7c14d18b7a5)
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/176693ef-8c55-4d8e-a20d-8f4507439d30)

![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/013236c0-88c2-4c04-bbb1-2c4cf8f6cc58)
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/d1c926d1-74e0-4484-8262-2cd92d67347e)
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/20d1bf49-5482-438f-8f91-ff7d60ca1875)
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/a98d1a5f-19fb-4be3-a51d-d63fd6df4680)
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/1c3a356f-b891-4bb7-ae41-9d8d3c25cd37)
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/4b3b394b-a56d-4456-9e5e-0a7fcfd85cb0)
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/3d01a629-557a-4cdb-bb25-da4b4d717f93)
![image](https://github.com/ajeetram/Electronic-Health-Record-Management-System/assets/86039147/2853e9ac-ef2f-446a-a236-73b729d48562)

 How to use

Clone repository.

Install all the required packages using :

### `npm install`
  
To start the project, run :

### `npm start`
  
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
