using System.Collections.Generic;
using System;

namespace SuncoastOverflow.Models
{
  public class Questions
  {
    public int Id { get; set; }

    public string Title { get; set; }

    public string Body { get; set; }

    public int Votes { get; set; }

    public DateTime CreatedTime { get; set; } = DateTime.Now;

    public string Author { get; set; }
  }
}

