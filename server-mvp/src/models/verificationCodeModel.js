const mongoose = require("mongoose");


const verificationCodeSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    
    type: {
      type: String,
      default: "user",
    },    
    token: {
      type: String,
      default: "",
    },
    
    verification_code: {
      type: Number,
      default: 0,
    },

    expiresAt: {
      type: Date,
      default: function() {
        // Set the expiration time to, for example, 24 hours from now
        return new Date(new Date().getTime() +  30 * 60 * 1000);
      },
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("VerificationCode", verificationCodeSchema);
