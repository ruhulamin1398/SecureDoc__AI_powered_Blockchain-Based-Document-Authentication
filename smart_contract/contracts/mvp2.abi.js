// contract address  0x7fc9967078799Ae7A760E1f2D9A5c3Ed978aC175 


[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "uploader",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "disqualificationMessage",
				"type": "string"
			}
		],
		"name": "DocumentDisqualified",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "uploader",
				"type": "address"
			}
		],
		"name": "DocumentUploaded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "addAuthorityMember",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "addInstitutionAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_id",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_isActive",
				"type": "bool"
			}
		],
		"name": "changeAuthorityMemberStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_id",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_isActive",
				"type": "bool"
			}
		],
		"name": "changeInstitutionAdminStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_disqualificationMessage",
				"type": "string"
			}
		],
		"name": "disqualifyDocument",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_id",
				"type": "address"
			}
		],
		"name": "removeAuthorityMember",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_id",
				"type": "address"
			}
		],
		"name": "removeInstitutionAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_pdfHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_dataHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_encryptedData",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_documentType",
				"type": "string"
			}
		],
		"name": "uploadDocument",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "authorityMemberIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "authorityMembers",
		"outputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "authorityMembersList",
		"outputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_dataHash",
				"type": "string"
			}
		],
		"name": "checkDataHashExistence",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			}
		],
		"name": "checkDocumentExistence",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_pdfHash",
				"type": "string"
			}
		],
		"name": "checkPdfHashExistence",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "documentCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "documents",
		"outputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "pdfHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dataHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "encryptedData",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "documentType",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "uploader",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "disqualified",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "disqualificationMessage",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAuthorityMemberList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "id",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct DocumentManagement.AuthorityMember[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getInstitutionAdminList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "id",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct DocumentManagement.InstitutionAdmin[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_uploader",
				"type": "address"
			}
		],
		"name": "getUploaderDocuments",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "id",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "pdfHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dataHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "encryptedData",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "documentType",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "uploader",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "disqualified",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "disqualificationMessage",
						"type": "string"
					}
				],
				"internalType": "struct DocumentManagement.Document[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "institutionAdminCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "institutionAdmins",
		"outputs": [
			{
				"internalType": "address",
				"name": "id",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]