
export default function ActivityForm() {

  return (
    <form>
      <div>
        <label htmlFor="activity">Activity:</label>
        <input
          type="text"
          id="activity"
          name="activity"
          required
        />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          required
        />
      </div>

      <div>
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          required
        >
          <option value="education">Education</option>
          <option value="recreational">Recreational</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="charity">Charity</option>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="music">Music</option>
          <option value="busywork">Busywork</option>
        </select>
      </div>

      <div>
        <label htmlFor="bookingRequired">
          <input
            type="checkbox"
            id="bookingRequired"
            name="bookingRequired"
          />
          Booking Required
        </label>
      </div>

      <div>
        <label htmlFor="accessibility">Accessibility:</label>
        <input
          type="range"
          id="accessibility"
          name="accessibility"
          min="0"
          max="1"
          step="0.1"
        />
        <span></span>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}