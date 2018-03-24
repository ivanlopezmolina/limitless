using System;
using System.Data.Odbc;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Data.Common;
using limitless.Models;
using System.Collections.Generic;
using limitless.Storage;

namespace limitless.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values/5
        [HttpGet]
        public IEnumerable<Housing> GetData()
        {
            DataContext context = new DataContext();
            return context.Housings;
        }
    }
}
