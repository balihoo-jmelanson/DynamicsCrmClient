require('./lib/XrmServiceToolkit/XrmServiceToolkit.js');

var request = '<request i:type="c:WhoAmIRequest" xmlns:c="http://schemas.microsoft.com/crm/2011/Contracts" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:b="http://schemas.microsoft.com/xrm/2011/Contracts"><b:Parameters xmlns:d="http://schemas.datacontract.org/2004/07/System.Collections.Generic"/><b:RequestId i:nil="true"/><b:RequestName>WhoAmI</b:RequestName></request>';

XrmServiceToolkit.Soap.Execute(request, function (data){
	console.log(data);
});

// XrmServiceToolkit.Soap.Fetch(
// 	'<fetch mapping="logical"><entity name="List"><attribute name="ListId"/><attribute name="Name"/></entity></fetch>', 
// 	function(result) {
//     	console.log(result)
//     },
//     function(error) {
//     	console.log(error)
//     }
// );

