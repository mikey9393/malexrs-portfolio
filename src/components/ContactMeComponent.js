const ContactMe = () => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              id="icon_prefix"
              type="text"
              className="validate white-text"
            />
            <label className="white-text" for="icon_prefix">
              First Name
            </label>
          </div>
          <div class="input-field col s6">
            <input
              id="icon_telephone"
              type="tel"
              className="validate white-text"
            />
            <label className="white-text" for="icon_telephone">
              Telephone
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactMe;
