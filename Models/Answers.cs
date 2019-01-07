using System.Collections.Generic;
using System;

namespace SuncoastOverflow.Models
{
  public class Answers
  {
    public int Id { get; set; }

    public string AnswerBody { get; set; }

    public int Votes { get; set; }

    public DateTime CreatedTime { get; set; } = DateTime.Now;

    public string Author { get; set; }
  }
}