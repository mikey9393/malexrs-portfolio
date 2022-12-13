const AcademicsC = () => {
  return (
    <table className="white-text">
      <thead>
        <h1 className="header">College of Western Idaho</h1>
        <address>
          Ada County Campus Pintail Center
          <br />
          1360 S. Eagle Flight Way
          <br />
          Boise, ID 83704
        </address>
        <caption>First Year- Front End Development</caption>
        <tr>
          <th>Course ID:</th>
          <th>Course Name:</th>
          <th>Content:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SWDV-120</td>
          <td>Introduction to Programming</td>
          <td>C#</td>
        </tr>
        <tr>
          <td>SWDV-125</td>
          <td>Intermediate Programing</td>
          <td>C#</td>
        </tr>
        <tr>
          <td>SWDV-130</td>
          <td>Introduction to Web Application Development</td>
          <td>HTML5/CSS3</td>
        </tr>
        <tr>
          <td>SWDV-135</td>
          <td>Web Styling</td>
          <td>Bootstrap Sass</td>
        </tr>
        <tr>
          <td>SWDV-140</td>
          <td>Intermediate Web Application Development</td>
          <td>Javascript</td>
        </tr>
        <tr>
          <td>SWDV-143</td>
          <td>Client Side Frameworks</td>
          <td>Angular</td>
        </tr>
        <tr>
          <td>SWDV-152</td>
          <td>Systems Analysis and Design</td>
          <td>GitHub</td>
        </tr>
      </tbody>
      <tfoot>
        <td colspan="3">
          <a href="https://catalog.cwi.edu/course-descriptions/swdv/">
            Course Descriptions
          </a>
        </td>
      </tfoot>
    </table>
  );
};
export default AcademicsC;
