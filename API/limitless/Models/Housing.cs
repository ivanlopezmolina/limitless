namespace limitless.Models
{
    public class Housing
    {
        public int TotalPeople { get; set; }
        public decimal SpedningPerMonth { get; set; }
        public decimal HouseHoldIncome { get; set; }
        public decimal PersonIncome { get; set; }
        public decimal HouseHoldIncomeUnder5K { get; set; }
        public decimal HouseHoldIncomeBetween5KAnd10K { get; set; }
        public decimal HouseHoldIncomeBetween10KAnd15K { get; set; }
        public decimal HouseHoldIncomeBetween15KAnd20K { get; set; }
        public decimal HouseHoldIncomeAbove20K { get; set; }
        public decimal StdZip { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
    }
}
