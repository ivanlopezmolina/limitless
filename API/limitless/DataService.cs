using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// ADD THIS PART TO YOUR CODE
using System.Net;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;
using System.Diagnostics;

namespace limitless
{

    public class DataService
    {
        // ADD THIS PART TO YOUR CODE
        private const string EndpointUri = "https://limitless.documents.azure.com";
        private const string PrimaryKey = "ZjeUPClvGUNGUQV62sPTiiL20w0GbYHGQA4vwTGfbymOyZgdMvYN3nnTbRjCUoKazmhYXg4dXW94ya8qLHuE1Q==";
        private DocumentClient client;

        // ADD THIS PART TO YOUR CODE
        private async Task GetStartedDemo()
        {
            this.client = new DocumentClient(new Uri(EndpointUri), PrimaryKey);
            await this.client.CreateDatabaseIfNotExistsAsync(new Database { Id = "limitlessDB" });
            // ADD THIS PART TO YOUR CODE
            await this.client.CreateDocumentCollectionIfNotExistsAsync(UriFactory.CreateDatabaseUri("limitlessDB"), 
                new DocumentCollection { Id = "SampleCollection" });

        }

        public DataService()
        {
            try
            {
                GetStartedDemo().Wait();
            }
            catch (DocumentClientException de)
            {
                Exception baseException = de.GetBaseException();
                Debug.WriteLine("{0} error occurred: {1}, Message: {2}", de.StatusCode, de.Message, baseException.Message);
            }
            catch (Exception e)
            {
                Exception baseException = e.GetBaseException();
                Debug.WriteLine("Error: {0}, Message: {1}", e.Message, baseException.Message);
            }
            finally
            {
                Debug.WriteLine("End of demo, press any key to exit.");
            }
        }
    }
}
