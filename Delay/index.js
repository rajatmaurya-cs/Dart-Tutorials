// 🧠 1. READ (Quick Revision)

// Get all users
await User.find({});

// Get one user (any one)
await User.findOne({});

// Get user by ID
await User.findById(userId);


// ✏️ 2. UPDATE Queries

// 🟢 Update ONE user

await User.updateOne(
  { _id: userId },
  { $set: { name: "Rajat" } }
);

// 🟢 Update MANY users

await User.updateMany(
  { role: "user" },
  { $set: { isActive: true } }
);

// 🟢 Update by ID (MOST USED ✅)

await User.findByIdAndUpdate(
  userId,
  { name: "Rajat" },
  { new: true } // returns updated document
);


// 🗑️ 3. DELETE Queries


// 🟢 Delete ONE user
await User.deleteOne({ _id: userId });

// 🟢 Delete MANY users
await User.deleteMany({ isInactive: true });

// 🟢 Delete by ID
await User.findByIdAndDelete(userId);



// 🟢 PUT (Full Update)
// 👉 Replace entire resource

// Example: overwrite whole user

await User.findByIdAndUpdate(
  userId,
  {
    name: "Rajat",
    email: "rajat@gmail.com",
    age: 22
  },
  { new: true, overwrite: true }
);



// 🟢 PATCH (Partial Update)

// 👉 Update only specific fields

await User.findByIdAndUpdate(
  userId,
  { $set: { name: "Rajat" } },
  { new: true }
);