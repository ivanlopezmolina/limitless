using limitless.Models;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Odbc;
using System.Threading.Tasks;

namespace limitless.Storage
{
    public class DataContext
    {
        private OdbcConnection _connection;

        private const string _connectionString = "DSN=Limitless Hive 64;UID=hacker095;";
        private const string _tableHousing = "SELECT * FROM housing_affh_housing_project_affht0004_november2017_mecklenburg limit 20;";

        private IEnumerable<Housing> _housings;

        public IEnumerable<Housing> Housings
        {
            get { return _housings; }
        }

        public DataContext()
        {
            _connection = new OdbcConnection(_connectionString);
            getHousing().Wait();
        }

        private async Task getHousing()
        {
            IEnumerable<Housing> housingCollection = new List<Housing>();
            using (OdbcConnection conn = new OdbcConnection(_connectionString))
            {
                conn.OpenAsync().Wait();
                OdbcCommand cmd = conn.CreateCommand();
                cmd.CommandText = _tableHousing;
                DbDataReader dr = await cmd.ExecuteReaderAsync();
                Housing housing = new Housing();
                while (dr.Read())
                {
                    housing = new Housing();
                    if (dr["people_total"] != null) housing.HouseHoldIncome = int.Parse(dr["people_total"].ToString());
                    if (dr["spending_per_month"] != null) housing.SpedningPerMonth = decimal.Parse(dr["spending_per_month"].ToString());
                    if (dr["hh_income"] != null) housing.SpedningPerMonth = decimal.Parse(dr["hh_income"].ToString());
                    if (dr["person_income"] != null) housing.PersonIncome = decimal.Parse(dr["person_income"].ToString());
                    if (dr["pct_lt5k"] != null) housing.HouseHoldIncomeUnder5K = decimal.Parse(dr["pct_lt5k"].ToString());
                    if (dr["pct_5k_lt10k"] != null) housing.HouseHoldIncomeBetween5KAnd10K = decimal.Parse(dr["pct_5k_lt10k"].ToString());
                    if (dr["pct_10k_lt15k"] != null) housing.HouseHoldIncomeBetween10KAnd15K = decimal.Parse(dr["pct_10k_lt15k"].ToString());
                    if (dr["pct_15k_lt20k"] != null) housing.HouseHoldIncomeBetween15KAnd20K = decimal.Parse(dr["pct_15k_lt20k"].ToString());
                    if (dr["pct_ge20k"] != null) housing.HouseHoldIncomeAbove20K = decimal.Parse(dr["pct_ge20k"].ToString());
                    if (dr["STD_ZIP5"] != null) housing.StdZip = decimal.Parse(dr["STD_ZIP5"].ToString());
                    if (dr["longitude"] != null) housing.Longitude = decimal.Parse(dr["longitude"].ToString());
                    if (dr["latitude"] != null) housing.Latitude = decimal.Parse(dr["latitude"].ToString());
                    (housingCollection as List<Housing>).Add(housing);
                }
                
            }
            _housings = housingCollection;
        }
    }
}
