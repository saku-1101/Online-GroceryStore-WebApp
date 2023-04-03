<?php

namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;

class CheckOut extends Mailable
{
    use Queueable, SerializesModels;
    
    
    /**
     * Instances
     *
     * @var \App\Models\Order
     */
    public $name;
    public $order;
    public $order_detail;
    public $when;

    /**
     * Create a new order instance
     *
     * @param  $name
     * @param  \App\Models\Order  $order
     * @param  \App\Models\Order  $order_detail
     * @param  $when
     * @return void
     */
    public function __construct($name, Order $order, $order_detail, $when)
    {
        $this->name = $name;
        $this->order = $order;
        $this->order_detail = $order_detail;
        $this->when = $when;
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            from: new Address('andasakura31@gmail.com', '🌸SAKU store'),
            subject: 'Thank you for shopping with us!',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            view: 'email.name',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
    
    /**
     * Build the message.
     *
     * @return $this
     */
    // public function build()
    // {
    //     // add custom email template
    //     return $this->text('email.name')->from('andasakura31@gmail.com', 'SAKU store')->subject('Thank you for your shopping!');
    // }
}
