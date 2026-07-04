import { useState } from "react";
import { supabase } from "../services/supabase";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    rating: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("feedback").insert([
      {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        rating: Number(form.rating),
        feedback: form.feedback,
      },
    ]);

    if (error) {
      alert("Error: " + error.message);
      return;
    }

    alert("Feedback submitted successfully!");

    setForm({
      name: "",
      email: "",
      mobile: "",
      rating: "",
      feedback: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={form.mobile}
        onChange={handleChange}
        required
      />

      <select
        name="rating"
        value={form.rating}
        onChange={handleChange}
        required
      >
        <option value="">Select Rating</option>
        <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
        <option value="4">⭐⭐⭐⭐ Good</option>
        <option value="3">⭐⭐⭐ Average</option>
        <option value="2">⭐⭐ Poor</option>
        <option value="1">⭐ Very Poor</option>
      </select>

      <textarea
        name="feedback"
        placeholder="Write your feedback..."
        rows="5"
        value={form.feedback}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit Feedback</button>
    </form>
  );
}