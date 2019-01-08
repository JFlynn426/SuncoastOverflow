using Microsoft.EntityFrameworkCore.Migrations;

namespace content.Migrations
{
    public partial class CreatedModelsAndControllers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Votes",
                table: "Questions",
                newName: "QuestionVotes");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Questions",
                newName: "QuestionTitle");

            migrationBuilder.RenameColumn(
                name: "CreatedTime",
                table: "Questions",
                newName: "QuestionCreatedTime");

            migrationBuilder.RenameColumn(
                name: "Body",
                table: "Questions",
                newName: "QuestionBody");

            migrationBuilder.RenameColumn(
                name: "Author",
                table: "Questions",
                newName: "QuestionAuthor");

            migrationBuilder.RenameColumn(
                name: "Votes",
                table: "Answers",
                newName: "AnswerVotes");

            migrationBuilder.RenameColumn(
                name: "CreatedTime",
                table: "Answers",
                newName: "AnswerCreatedTime");

            migrationBuilder.RenameColumn(
                name: "Author",
                table: "Answers",
                newName: "AnswerAuthor");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "QuestionVotes",
                table: "Questions",
                newName: "Votes");

            migrationBuilder.RenameColumn(
                name: "QuestionTitle",
                table: "Questions",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "QuestionCreatedTime",
                table: "Questions",
                newName: "CreatedTime");

            migrationBuilder.RenameColumn(
                name: "QuestionBody",
                table: "Questions",
                newName: "Body");

            migrationBuilder.RenameColumn(
                name: "QuestionAuthor",
                table: "Questions",
                newName: "Author");

            migrationBuilder.RenameColumn(
                name: "AnswerVotes",
                table: "Answers",
                newName: "Votes");

            migrationBuilder.RenameColumn(
                name: "AnswerCreatedTime",
                table: "Answers",
                newName: "CreatedTime");

            migrationBuilder.RenameColumn(
                name: "AnswerAuthor",
                table: "Answers",
                newName: "Author");
        }
    }
}
