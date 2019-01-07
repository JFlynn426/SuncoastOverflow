using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SuncoastOverflow.Models;

namespace content.Controllers
{
  [Route("api/[controller]")]
  public class AnswersController : Controller
  {
    private DatabaseContext db;

    public AnswersController()
    {
      this.db = new DatabaseContext();
    }
    [HttpGet]

    public ActionResult<List<Answers>> GetAllAnswers()
    {
      var results = this.db.Answers;
      return results.ToList();
    }
  }
}