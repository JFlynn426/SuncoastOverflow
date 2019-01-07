using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SuncoastOverflow.Models;

namespace content.Controllers
{
  [Route("api/[controller]")]
  public class QuestionsController : Controller
  {

    private DatabaseContext db;

    public QuestionsController()
    {
      this.db = new DatabaseContext();
    }
    [HttpGet]

    public ActionResult<List<Questions>> GetAllQuestions()
    {
      var results = this.db.Questions;
      return results.ToList();
    }

  }
}